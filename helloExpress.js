//VIEW AT :http://localhost:3000/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { //Default page.
  res.send('Hello World!')
})

app.get('/again', (req, res) => { //Another page.
  res.send('Hi again!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
