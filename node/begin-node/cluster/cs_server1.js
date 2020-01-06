const cluster = require("cluster")
const http = require("http")
const numCPUs = require("os").cpus().length

if (cluster.isMaster) {
    console.log(`master process id: ${process.pid}`)
    //generate worker as cpu counts
    for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork()
    }

    //when worker terminated 
    cluster.on("exit", (worker, code, signal) => {
        console.log(`${worker.process.pid} is terminated.`)
        cluster.fork() //if error occured, make a new cluster !!o!!
    })
} else {
    //workers wait on port
    http.createServer((req, res) => {
        res.write("<h1>hello node!</h1>")
        res.end("<p>hello cluster</p>")
        setTimeout(() => {
            process.exit(1)
        }, 1000);
    }).listen(8085)

    console.log(`${process.pid} worker running`)
}