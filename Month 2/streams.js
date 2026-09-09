fs.writeFile('./docs/blog3.txt', 'lorem ipsum', () => {
  console.log('file was written')
});
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');

