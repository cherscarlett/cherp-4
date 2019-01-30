<template>
  <div/>
</template>
<script>
export default {
  computed: {
    token() {
      return this.$store.state.token
    }
  },
  asyncData({ env, query }) {
    return {
      query,
      mLabKey: env.mLabKey,
      mLabDB: env.mLabDB
    }
  },
  mounted() {
    if (this.query.code) {
      this.spotifyTokens()
      window.close()
    }
  },
  methods: {
    async postToken(spotifyTokenData) {
      const resp = await this.$axios.$post(
        `https://api.mlab.com/api/1/databases/${
          this.mLabDB
        }/collections/spotifyTokens?fo=true&apiKey=${this.mLabKey}`,
        { body: spotifyTokenData.refresh_token }
      )
      this.$store.commit('update', {
        token: spotifyTokenData.refresh_token,
        tokenId: resp._id.$oid,
        access: spotifyTokenData.access_token
      })
    },
    async spotifyTokens() {
      const spotifyTokenData = await this.$axios.$get(
        `/api/auth/${this.query.code}`
      )
      this.postToken(spotifyTokenData)
    }
  }
}
</script>
