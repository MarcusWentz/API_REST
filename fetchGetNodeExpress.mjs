//VIEW AT :http://localhost:3000/
import fetch from 'node-fetch';
import express from 'express'
const app = express()
const port = 3000

  let response = await fetch('https://ethgasstation.info/api/ethgasAPI.json');
  let data = await response.json();
  console.log(data);
  console.log(data.average);

app.get('/', (req, res) => { //Default page.
  try {
    res.send(data)
  }
  catch{
    res.send("error")
  }
})

app.get('/gas', (req, res) => { //Another page.
  res.send(" fast: " + data.fast + " average: " + data.average + " safeLow: " + data.safeLow + " blockNum: " + data.blockNum)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
