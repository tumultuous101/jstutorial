
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writestream = fs.createWriteStream('./docs/blog3_copy.txt');
// Listen for the 'data' event
// readStream.on ('data', (chunk) => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
//   writestream('\n---- NEW CHUNK ----\n');
//   writestream.write(chunk);
// }) ; 

//piping 
readStream.pipe(writestream);