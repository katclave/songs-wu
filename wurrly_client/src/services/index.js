const axios = require('axios')
const baseUrl = 'http://localhost:8000/api/'

export function getSongs(){
  return axios.get(`${baseUrl}/songs`)
  .then((response) => {
    return response
  })
}

export function findRoyalties(song){
  console.log(song)
  return axios.post(`${baseUrl}/royalties`, {
    song: song
  })
  .then((response) => {
    return(response)
  })
}
