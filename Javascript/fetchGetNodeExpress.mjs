//VIEW AT :http://localhost:3000/
//Node v16.14.0
import fetch from 'node-fetch';
import express from 'express'
const app = express()
const port = 3000

// const structTime
const averagePrices = [];
const timeStampUnix = [];
const averageCalculate = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
let response = await fetch('https://ethgasstation.info/api/ethgasAPI.json');
let data = await response.json();
averagePrices.push(data.fast)
timeStampUnix.push(Date.now()-(Date.now()%20)) //Make sure value is only divisible by 20 perfectly to reduce storage size.
console.log(averagePrices);
console.log(timeStampUnix);
console.log("MinTime: " + timeStampUnix[0]);
console.log("MaxTime: " + timeStampUnix[timeStampUnix.length-1]);
console.log(averageCalculate(averagePrices) );

setInterval(async function fetchLatestGasData(){
  response = await fetch('https://ethgasstation.info/api/ethgasAPI.json');
  data = await response.json();
  averagePrices.push(data.fast)
  timeStampUnix.push(Date.now()-(Date.now()%20))
  console.log("MinTime: " + timeStampUnix[0]);
  console.log("MaxTime: " + timeStampUnix[timeStampUnix.length-1]);
  console.log(averagePrices);
  console.log(timeStampUnix);
  console.log(averageCalculate(averagePrices) );

}, 20000); //CHECK BLOCKTIME EVERY 20 SECONDS WORST CASE.

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
    res.send(" fast: "     + data.fastest + //fast -> fastest, average -> fast (don't get confused by
             " average: "  + data.fast    + //"average" field that's the average gas price between fastest, fast, and
             " low: "      + data.safeLow + //safeLow), low -> safeLow
             " blockNum: " + data.blockNum)
  }
  catch{
    res.send("error")
  }
})

app.get('/average', (req, res) => {
  try {
      if(timeStampUnix[0] <= Date.now() ) {
        res.send(" averageGas: "      + averageCalculate(averagePrices)        +
                 " startTimeUnix: "   + timeStampUnix[0]                       +
                 " endTimeUnix: "     + timeStampUnix[timeStampUnix.length-1]  +
                 " currentTimeUnix: " +  Date.now()                            )
      } else {
        res.send(" Minimum time filter is "     + timeStampUnix[0]                       +
                 " and maximum time filter is " + timeStampUnix[timeStampUnix.length-1]  +
                 " currentTimeUnix: "           + Date.now()                             )
      }
  }
  catch{
    res.send("error")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
