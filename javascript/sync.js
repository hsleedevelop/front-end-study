const fs = require("fs")

console.log("start")
let data = fs.readFileSync("./readme.md")
console.log("1st", data.toString())
data = fs.readFileSync("./readme.md")
console.log("2nd", data.toString())
data = fs.readFileSync("./readme.md")
console.log("3rd", data.toString())
console.log("end")

