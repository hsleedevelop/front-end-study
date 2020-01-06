const https = require("https")
const fs = require("fs")

https.createServer({
    cert: fs.readFileSync("cert"),
    key: fs.readFileSync("key"),
    ca: [
        fs.readFileSync("parent cert"),
        fs.readFileSync("parent path")
    ],
}, (req, res) => {
    res.write("<h1>hello node</h1>")
    res.end("<p>hello server</p>")
}).listen(443, () => {
    console.log("listen on 443 port")
})
