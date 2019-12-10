const fs = require('fs')
//const fs = require('fs').promises

fs.copyFile('readme.md', 'readme_copy.md', (error) => {
    if (error) {
        return console.error(error)
    }
    console.log('copied')
})

