//RUN IN JSFIDDLE
fetch('https://ethgasstation.info/api/ethgasAPI.json?')
.then(res => res.json() )
.then(data => console.log(data))
.catch(error => console.log('ERROR'))

fetch('https://ethgasstation.info/api/ethgasAPI.json?')
.then(res => res.json() )
.then(data => console.log(data.safeLow))
.catch(error => console.log('ERROR'))
