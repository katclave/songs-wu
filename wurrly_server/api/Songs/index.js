const express = require('express')
const song = express.Router()
const axios = require('axios')
const baseUrl = 'https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json'

song.get('/', (req, res) => {
  return axios.get(baseUrl)
  .then((result) => {
    res.json(result.data)
  })
})

module.exports = song
