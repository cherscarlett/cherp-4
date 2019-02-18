<template>
  <transition name="fade" mode="in-out">
    <article v-if="nowPlaying && nowPlaying.item">
      <h1>Current Vibes</h1>
      <p class="title">{{ nowPlaying.item.name }}</p>
      <p class="artist">
        <em v-for="(artist, index) in nowPlaying.item.artists" :key="index">{{ artist.name }}</em>
      </p>
      <aside>
        <span :style="`width: ${trackProgress}`" :aria-label="trackProgress"/>
      </aside>
      <img :src="nowPlaying.item.album.images[0].url" alt=" ">
    </article>
  </transition>
</template>
<script>
export default {
  data() {
    return { staleTimer: '', trackTimer: '', trackProgress: '0%' }
  },
  computed: {
    token() {
      return this.$store.state.token
    },
    access() {
      return this.$store.state.access
    },
    isStale() {
      return Boolean(this.$store.state.staleTime < Date.now())
    },
    nowPlaying() {
      if (!this.$store.state.nowPlaying && this.$store.state.access) {
        this.getNowPlaying()
      }
      return this.$store.state.nowPlaying
    },
    audioAnalysis() {
      return this.$store.state.audioAnalysis
    }
  },
  created() {
    if (this.access)
      this.staleTimer = setInterval(() => {
        this.getNowPlaying()
      }, 5000)
  },
  methods: {
    computeProgress(progressMs = 0, duration = 0) {
      return `${(progressMs / duration) * 100}%`
    },
    async getNowPlaying() {
      const nowPlaying = await this.$axios.$get(
        `/api/now-playing/${this.access}`
      )
      const progress = nowPlaying.progress_ms
      const duration = nowPlaying.item.duration_ms
      this.computeProgress(progress, duration)
      let id = null
      if (this.nowPlaying) id = this.nowPlaying.item.id
      if (nowPlaying && (nowPlaying.is_playing && nowPlaying.item.id !== id)) {
        this.timeTrack(Date.now(), duration, progress)
        this.$store.commit('nowPlayingChange', {
          nowPlaying
        })
        // this.getAudioAnalysis(nowPlaying.item.id)
      }
    },
    async getAudioAnalysis(id) {
      const audioAnalysis = await this.$axios.$get(
        `/api/audio-analysis/${id}/${this.access}`
      )
      this.$store.commit('updateAudioAnalysis', {
        audioAnalysis
      })
    },
    timeTrack(now, duration, progress) {
      const remainder = duration - progress
      const until = now + remainder
      clearInterval(this.runTimer)
      this.runTimer = setInterval(() => {
        const newNow = Date.now()
        if (newNow < until + 2500) {
          const newRemainder = until - newNow
          const newProgressMs = duration - newRemainder
          const newProgress = this.computeProgress(newProgressMs, duration)
          this.trackProgress = newProgress
        } else {
          this.trackProgress = '100%'
          clearInterval(this.runTimer)
          this.getNowPlaying()
        }
      }, 100)
    }
  },
  beforeDestroy() {
    clearInterval(this.staleTimer)
    clearInterval(this.runTimer)
  }
}
</script>

<style scoped>
article {
  position: absolute;
  bottom: 45px;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  mix-blend-mode: hard-light;
  padding: 8px 65px 0 0;
  color: white;
  filter: brightness(170%);
}
.fade-enter-active,
.fade-leave-active,
.fade-enter-active p,
.fade-leave-active p,
.fade-enter-active img,
.fade-leave-active img,
.fade-enter-active span,
.fade-leave-active span {
  transition: opacity 300ms ease-in-out;
}
.fade-enter,
.fade-leave,
.fade-enter p,
.fade-leave p,
.fade-enter img,
.fade-leave img,
.fade-enter span,
.fade-leave span {
  opacity: 0;
}

h1 {
  position: absolute;
  right: 8px;
  top: -25px;
  background: url(~assets/spotify.svg) center right no-repeat;
  background-size: contain;
  padding: 0 30px 0 0;
  margin: 0;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
}
p {
  text-align: right;
  font-size: 0.9em;
  font-family: 'Domaine Display Narrow';
  font-style: italic;
  opacity: 0.6;
  white-space: nowrap;
}
em {
  display: inline-block;
  padding-right: 4px;
  font-weight: normal;
}
em:after {
  content: ', ';
}
em:last-child {
  padding-right: 0;
}
em:last-child:after {
  content: none;
}
p.title {
  display: block;
  font-size: 1em;
  font-weight: bold;
  font-family: 'Domaine Display';
  font-style: normal;
  padding-bottom: 6px;
}
span {
  position: relative;
  z-index: 1;
}
span {
  position: absolute;
  display: block;
  bottom: 0;
  height: 1px;
  opacity: 0.5;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 1px #fff, 0 0 4px #ff1177, 0 0 5px #ff1177, 0 0 6px #ff1177,
    0 0 7px #ff1177, 0 0 10px #ff1177;
}
span:after {
  content: '';
  position: absolute;
  right: 0;
  top: -1px;
  bottom: 0;
  height: 3px;
  width: 3px;
  background: #ff1177;
  border-radius: 50%;
  filter: blur(3px);
  box-shadow: 0 0 1px #fff, 0 0 4px #ff1177, 0 0 5px #ff1177, 0 0 6px #ff1177,
    0 0 7px #ff1177, 0 0 10px #ff1177;
}
img {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: inline-block;
  z-index: 0;
  height: 100%;
  opacity: 0.8;
  filter: grayscale(90%);
}
</style>
