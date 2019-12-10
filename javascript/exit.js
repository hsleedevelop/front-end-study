let i = 1
setInterval(() => {
    if (i === 5) {
        console.log('exit!')
        process.exit() //0 or nil = sucess, 1 >= error
    }
    console.log(i)
    i += 1
}, 1000);
