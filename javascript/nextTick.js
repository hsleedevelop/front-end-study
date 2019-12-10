setImmediate(() => {
    console.log('immediate')
})

process.nextTick(() => {//microtask
    console.log('nextTick')
})


setTimeout(() => {
    console.log('timeout')
}, 0)

Promise.resolve().then(() => console.log('promise')) //microtask
