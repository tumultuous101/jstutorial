
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');

// Listen for the 'data' event
readStream.on ('data', (chunk) => {
  console.log('---- NEW CHUNK ----');
  console.log(chunk);
})