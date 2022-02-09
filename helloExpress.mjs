//VIEW AT :http://localhost:3000/
//MAKE SURE YOU HAVE THE LATEST VERSION OF NODEJS AND HAVE THIS AS AN MJS FILE
import fetch from 'node-fetch';
import express from 'express'
const app = express()
const port = 3000

const response = await fetch('https://api.github.com/users/github');
const data = await response.json();
console.log(data);

app.get('/', (req, res) => { //Default page.
  res.send(data)
})

app.get('/hello', (req, res) => { //Another page.
  res.send('Hello.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
