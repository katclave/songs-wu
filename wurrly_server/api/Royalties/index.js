const express = require('express')
const royalties = express.Router()
const axios = require('axios')
const baseUrl = 'https://s3-us-west-2.amazonaws.com/wurrly-data/test/royalties.json'

royalties.post('/', (req, res) => {
  console.log(req.body)
  return axios.get(baseUrl)
  .then((result) => {
    res.json(result.data)
  })
})

module.exports = royalties
