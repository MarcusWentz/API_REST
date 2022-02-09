//VIEW AT :http://localhost:3000/
//Node v16.14.0
import fetch from 'node-fetch';
import express from 'express'
const app = express()
const port = 3000

// const structTime
const averagePrices = [];
const averageCalculate = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
let response = await fetch('https://ethgasstation.info/api/ethgasAPI.json');
let data = await response.json();
averagePrices.push(data.fast)
console.log(averagePrices);
console.log(averageCalculate(averagePrices));
console.log(Date.now())

setInterval(async function(){
  response = await fetch('https://ethgasstation.info/api/ethgasAPI.json');
  data = await response.json();
  averagePrices.push(data.fast)
  console.log(averagePrices);
  console.log(averageCalculate(averagePrices));
  console.log(Date.now())

}, 15000); //CHECK BLOCKTIME EVERY 15 SECONDS FOR MORE ACCURACY AGAINST MEV.

app.get('/', (req, res) => { //Default page.
  try {
    res.send(data)
  }
  catch{
    res.send("error")
  }
})

app.get('/gas', (req, res) => {
  try {
    res.send(" fast: " + data.fastest + //fast -> fastest, average -> fast (don't get confused by
             " average: " + data.fast + //"average" field that's the average gas price between fastest, fast, and
             " low: " + data.safeLow + //safeLow), low -> safeLow
             " blockNum: " + data.blockNum)
  }
  catch{
    res.send("error")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
