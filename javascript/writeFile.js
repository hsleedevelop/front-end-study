const fs = require("fs")

fs.writeFile("./writeme.md", "character is input.", (err) => {
    if (err) {
        throw err
    }
    fs.readFile("./writeme.md", (err, data) => {
        if (err) {
            throw err
        }
        console.log(data.toString())
    })
})