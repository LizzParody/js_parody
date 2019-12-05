const fs = require('fs');
const server = require('http').createServer();
const stream = require('stream');
const util = require('util');

const pipeline = util.promisify(stream.pipeline);

server.on('request', async (req, res) => {
  const src = fs.createReadStream('./big.file');
  await pipeline(
    src,
    res
  );
  console.log('Pipeline succeeded.');
});

server.listen(8000);