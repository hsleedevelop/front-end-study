
const url = require('url')

//WHATWG url type
const URL = url.URL
const myURL = new URL("http://www.naver.com")
console.log("new URL():", myURL)
console.log("url.format():", url.format(myURL))

console.log("---------------------------")

//node way
const parsedUrl = url.parse("http://www.naver.com")

console.log("url.parse():", parsedUrl)
console.log("url.format():", url.format(parsedUrl))


