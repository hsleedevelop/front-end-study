const http = require("http")

const parseCookies = (cookie = "") => {
    cookie
    .split(";")
    .map(v => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v)
        return acc
    }, {})
}

http.createServer((req, res) => {
    const coookies = parseCookies(req.headers.cookie)
    console.log(req.url, coookies)
    res.writeHead(200, { "Set-Cookie": "mycookie=test" })
    res.end("Hello cookie")
})
.listen(8082, () => {
    console.log("listen on 8082")
})
