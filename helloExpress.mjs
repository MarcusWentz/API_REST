//VIEW AT :http://localhost:3000/
import fetch from 'node-fetch';
import express from 'express'
const app = express()
const port = 3000

  let response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam');
  let data = await response.json();
  console.log(data);
  console.log(data.year);

app.get('/', (req, res) => { //Default page.
  try {
    res.send(data.year+"")
  }
  catch{
    res.send("error")
  }
})

app.get('/hello', (req, res) => { //Another page.
  res.send('Hello.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
