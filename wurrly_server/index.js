const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')

app.use(bodyParser.json({extended:true}))

app.use('/api', require('./api'))

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`) // eslint-disable-line
})
