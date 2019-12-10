const fs = require("fs")

const writeStream = fs.createWriteStream("./writeStream.md")
writeStream.on("finish", () => {
    console.log("file writed")
})

writeStream.write("write1")
writeStream.write("write2")
writeStream.end()

