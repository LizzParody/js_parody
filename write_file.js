const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
  file.write('Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun. Streams are fun.\n');
}

file.end();