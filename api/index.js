import express from 'express'
import axios from 'axios'

require('dotenv').config()

const app = express()

app.get('/auth/:code', (req, res) => {
  return axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      code: req.params.code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/callback'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(token => {
      res.send(token.data)
    })
    .catch(e => {
      res.send({ error: e })
    })
})

app.get('/refresh/:token', (req, res) => {
  return axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      refresh_token: req.params.token,
      grant_type: 'refresh_token'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(token => {
      res.send(token.data)
    })
    .catch(e => {
      res.send({ error: e.message })
    })
})

app.get('/now-playing/:access', (req, res) => {
  return axios
    .get('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${req.params.access}`
      }
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(e => {
      res.send({ error: e.message })
    })
})

app.get('/audio-analysis/:id/:access', (req, res) => {
  return axios
    .get(`https://api.spotify.com/v1/audio-analysis/${req.params.id}`, {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${req.params.access}`
      }
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(e => {
      res.send({ error: e.message })
    })
})

app.get('/audio-features/:id/:access', (req, res) => {
  return axios
    .get(`https://api.spotify.com/v1/audio-features/${req.params.id}`, {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${req.params.access}`
      }
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(e => {
      res.send({ error: e.message })
    })
})

module.exports = {
  path: '/api/',
  handler: app
}
