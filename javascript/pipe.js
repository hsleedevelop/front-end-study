const fs = require("fs")

const readStream = fs.createReadStream("./readme.md")
const writeStream = fs.createWriteStream("./writeme2.md")
readStream.pipe(writeStream)

