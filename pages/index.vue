<template>
  <NowPlaying v-if="!loading"/>
</template>

<script>
import NowPlaying from '~/components/NowPlaying.vue'

export default {
  components: { NowPlaying },
  computed: {
    token() {
      return this.$store.state.token
    },
    access() {
      return this.$store.state.access
    },
    isStale() {
      return Boolean(this.$store.state.staleTime < Date.now())
    }
  },
  async asyncData({ env, $axios }) {
    const sToken = await $axios.$get(
      `https://api.mlab.com/api/1/databases/${
        env.mLabDB
      }/collections/spotifyTokens?fo=true&apiKey=${env.mLabKey}`
    )
    const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${
      env.spotifyId
    }&response_type=code&scope=user-read-currently-playing,user-read-recently-played&redirect_uri=http://cherp.tv/callback`
    return {
      loading: false,
      spotifyUrl,
      sToken
    }
  },
  mounted() {
    if (!this.token && this.sToken)
      this.$store.commit('update', {
        token: this.sToken.body,
        tokenId: this.sToken._id.$oid
      })
    else if (!this.loading && !this.sToken) {
      const spotifyWindow = window.open(
        this.spotifyUrl,
        'name',
        'height=750,width=350'
      )
      if (window.focus) spotifyWindow.focus()
    }
    if ((this.token && !this.access) || (this.token && this.isStale)) {
      this.refreshToken(this.token)
    }
  },
  methods: {
    async refreshToken(token) {
      const spotifyTokenData = await this.$axios.$get(`/api/refresh/${token}`)
      this.$store.commit('update', {
        token: this.token,
        tokenId: this.tokenId,
        access: spotifyTokenData.access_token
      })
    }
  }
}
</script>
