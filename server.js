const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const fs = require('fs')

app.get('/', function (request, response) {
  const filePath = path.resolve(__dirname, './prod', 'index.html')

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    data = data.replace(/\$OG_URL/g, 'https://aeroport.bonia.com')
    const result = data.replace(/\$OG_IMAGE/g, 'https://aeroport.bonia.com/share_fb.jpg')
    response.send(result)
  })
})

app.use(express.static(path.resolve(__dirname, './prod')))

app.get('*', function (request, response) {
  const filePath = path.resolve(__dirname, './prod', 'index.html')
  response.sendFile(filePath)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
