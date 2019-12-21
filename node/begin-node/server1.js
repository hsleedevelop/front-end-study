const http = require("http")

http.createServer((req, res) => {
    res.write("<h1>Hello</h1>")
    res.end("<p>Hello Server</p>")
})
.listen(8080, () => {
    console.log("listening on 8080 port")
})
