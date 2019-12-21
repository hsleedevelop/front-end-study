const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    fs.readFile("../../html/example1/index.html", (err, data) => {
        if (err) {
            throw err
        }
        res.end(data)
    })
})
.listen(8081, () => {
    console.log("listening on 8081")
})
