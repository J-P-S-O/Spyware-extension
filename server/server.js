const express = require('express')

const app = express()
app.use(function (req, res, next) {
  const data = req.path.split('&')
  console.log(data[0].replace('/', ''))
  console.log(data[1])
  console.log(data[2])
})

app.listen(8080, () => console.log('Started server at http://localhost:8080!'))
