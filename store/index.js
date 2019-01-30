export const state = () => ({
  token: null,
  tokenId: null,
  access: null,
  staleTime: null,
  nowPlaying: null,
  trackProgress: '0%',
  audioAnalysis: null
})

export const mutations = {
  update(state, { token, tokenId, access }) {
    state.token = token
    state.tokenId = tokenId
    state.access = access
    state.staleTime = Date.now() + 3600
  },
  nowPlayingChange(state, { nowPlaying }) {
    state.nowPlaying = nowPlaying
  },
  updateTrackProgress(state, { trackProgress }) {
    state.trackProgress = trackProgress
  },
  updateAudioAnalysis(state, { audioAnalysis }) {
    state.audioAnalysis = audioAnalysis
  }
}
