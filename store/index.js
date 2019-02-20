export const state = () => ({
  token: null,
  tokenId: null,
  access: null,
  staleTime: null,
  nowPlaying: null,
  audioAnalysis: null,
  skills: null
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
  updateAudioAnalysis(state, { audioAnalysis }) {
    state.audioAnalysis = audioAnalysis
  },
  updateSkills(state, skills) {
    state.skills = skills
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
    /* eslint-disable */
    const axios = require('axios')
    const url = 'https://api.github.com/'
    const me = 'cherscarlett'
    const authParams = `?client_id=${process.env.GITHUB_ID}&client_secret=${
      process.env.GITHUB_SECRET
    }`
    const bytesPerLine = 150

    const flatten = (array = []) =>
      array.reduce((x, y) => x.concat(Array.isArray(y) ? flatten(y) : y), [])

    const sleep = ms => new Promise(res => setTimeout(res, ms))

    async function getRepositoryCount(username = me) {
      const endpoint = `${url}users/${username}${authParams}`
      const {
        data: { public_repos }
      } = await axios(endpoint)
      return public_repos
    }

    async function getRepositories(username = me) {
      const repositoryCount = await getRepositoryCount()
      const endpoint = `${url}users/${username}/repos${authParams}&type=all&per_page=100&page=`
      const pages = [...Array(Math.ceil(repositoryCount / 100)).keys()]
      const repos = await Promise.all(
        flatten(
          flatten(
            await Promise.all(
              pages.map(page => axios(`${endpoint}${page + 1}`))
            )
          ).map(({ data }) => data)
        ).map(({ name }) => getLanguages(name))
      )
      return repos.filter(repo => Boolean(repo))
    }

    async function getLanguages(repositoryName = '', username = me) {
      await sleep(100)
      const endpoint = `${url}repos/${username}/${repositoryName}/languages${authParams}`
      const { data } = await axios(endpoint)
      return Object.keys(data).length ? data : null
    }

    const getLines = (size = 0) => size / bytesPerLine
    const sum = (base = 0, addend) => base + addend
    function compare(a, b) {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    }

    function getPercentages(repositories = []) {
      const percentages = repositories.reduce((result, repository) => {
        Object.entries(repository).map(([language, size]) => {
          const current = result[language] || {}
          const σ = sum(current.size, size)
          result[language] = {
            size: σ,
            lines: getLines(σ)
          }
        }, {})
        return result
      }, {})
      delete percentages['CoffeeScript']
      delete percentages['KiCad Layout']
      delete percentages['C++']
      delete percentages['C#']
      delete percentages['Objective-C']
      return Object.keys(percentages)
        .map(k => {
          return { name: k, ...percentages[k] }
        })
        .filter(({ size }) => size >= 1000000)
        .sort(compare)
    }

    const mlabUrl = `https://api.mlab.com/api/1/databases/${
      process.env.MLAB_DB
    }/collections/githubRepos`
    const mlabQ = `?fo=true&apiKey=${process.env.MLAB_API_KEY}`
    return axios
      .get(`${mlabUrl}${mlabQ}`)
      .then(({ data: { body, _id: { $oid } } }) => {
        const repositories = JSON.parse(body)
        const percentages = getPercentages(repositories)
        commit('updateSkills', percentages)
        if (!Boolean($oid)) {
          const repositories = getRepositories()
          axios.put(`${mlabUrl}/${$oid}${mlabQ}`, {
            body: JSON.stringify(repositories)
          })
        }
      })
      .catch(err => {
        console.log(err)
        return err
      })
  }
}
