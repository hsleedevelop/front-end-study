const zlib = require('zlib')
const fs = require('fs')

const readStream = fs.createReadStream('./readme.md')
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme.md.gz')

readStream.pipe(zlibStream).pipe(writeStream)
