const timeout = setTimeout(() => {
   console.log('run after 1.5sec') 
}, 1500);

const interval = setInterval(() => {
    console.log('run on every 1sec')
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('did not run')
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2)
    clearInterval(interval)
}, 25000);

const immediate = setImmediate(() => {
    console.log('run immediately')
})

const immediate2 = setImmediate(() => {
    console.log('did not run2')
})

clearImmediate(immediate2)
