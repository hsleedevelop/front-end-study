const fs = require('fs')

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        if (err.code == 'ENOENT') {
            console.log('no folder')
            fs.mkdir('./folder', (err) => {
                if (err) {
                    throw err
                }
                console.log('folder created.')
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if (err) {
                        throw err
                    }
                    console.log('empty file created.')
                    fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                        if (err) {
                            throw err
                        }
                        console.log('changed file name.')
                    })
                })
            })
        } else {
            throw err
        }
    } else {
        console.log('alread exists.')
    }
})