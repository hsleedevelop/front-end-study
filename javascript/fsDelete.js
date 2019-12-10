const fs = require('fs')

fs.readdir('./folder', (err, dir) => {
    if (err) {
        throw err
    }
    console.log('check folder contents', dir)
    fs.unlink('./folder/newfile.js', (err) => {
        if (err) {
            throw err
        }
        console.log('file deleted.')
        fs.rmdir('./folder', (err) => {
            if (err) {
                throw err
            }
            console.log('folder deleted.')
        })
    })
})