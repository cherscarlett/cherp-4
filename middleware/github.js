/* eslint-disable */
const axios = require('axios')
const url = 'https://api.github.com/'
const me = 'cherscarlett'
const authParams = `?client_id=${process.env.GITHUB_ID}&client_secret=${
  process.env.GITHUB_SECRET
}`
const bytesPerLine = 150

async function getRepositoryCount(username = me) {
  try {
    const endpoint = `${url}users/${username}${authParams}`
    const {
      data: { public_repos }
    } = await axios(endpoint)
    return public_repos
  } catch (error) {
    return error
  }
}

async function getRepositories(username = me, repositoryCount) {
  try {
    const endpoint = `${url}users/${username}/repos${authParams}&type=all&per_page=100&page=`
    const pages = Math.ceil(repositoryCount / 100)
    const repositories = await Promise.all(
      pages.map(page => axios(`${endpoint}${page}`)).catch(e => console.log(e))
    )
    return repositories.data
  } catch (error) {
    return error
  }
}

async function getLanguages(repositoryName = '', username = me) {
  try {
    const endpoint = `${url}repos/${username}/${repositoryName}/languages${authParams}`
    const languages = await axios(endpoint)
    return languages.data
  } catch (error) {
    return error
  }
}

const flatten = (array = []) =>
  array.reduce((x, y) => {
    return x.concat(Array.isArray(y) ? flatten(y) : y)
  }, [])

const getValueSum = (values = []) =>
  values.reduce((x, y) => {
    return x + y
  }, 0)

function getSkills(percentages = []) {
  const skills = flatten(flatten(percentages).map(skill => skill.name))
  return Array.from(new Set(skills))
    .slice()
    .sort()
}

const getLines = (size = 0) => size / bytesPerLine

const getMaxValue = (repositories = []) =>
  Math.max(
    ...repositories.map(repository => {
      return getValueSum(
        repository.map(entry => {
          return entry.value
        }, [])
      )
    }, [])
  )

function getAdjustedValues(repositories = []) {
  const maxValue = getMaxValue(repositories)
  return repositories.map(repository => {
    const value = getValueSum(
      repository.map(entry => {
        return entry.value
      }, [])
    )
    const size = getValueSum(
      repository.map(entry => {
        return entry.size
      }, [])
    )
    const skillKey = repository.map(entry => {
      return entry.name
    }, [])[0]
    return {
      name: skillKey,
      value: (value / maxValue) * 100,
      lines: getLines(size),
      count: repository.length
    }
  }, [])
}

const getPercentages = (repositories = []) =>
  repositories.map(repository => {
    const total = Object.values(repository).reduce((sum, size) => sum + size, 0)
    // eslint-disable-next-line no-console
    console.log(total)
    return Object.entries(repository)
      .map(
        ([language, size]) => ({
          name: language,
          value: (size / total) * 100,
          size: size
        }),
        []
      )
      .filter(({ value }) => value >= 1)
  })

const getSortedValues = (repositories = [], skills = []) =>
  skills.map(skill => {
    return flatten(repositories).filter(repository => repository.name === skill)
  }, [])

export default async function({ store }) {
  try {
    const repositoryCount = await getRepositoryCount()
    const repositories = (await getRepositories(me, repositoryCount)).map(
      repository => repository.name
    )
    console.log(repositories)
    const languages = await Promise.all(
      repositories.map(repository => getLanguages(repository))
    )
    const percentages = getPercentages(
      languages.filter(repository => Object.keys(repository).length)
    )
    const skills = getSkills(percentages)
    const values = getAdjustedValues(getSortedValues(percentages, skills))
    return values
  } catch (err) {
    return err
  }
}
