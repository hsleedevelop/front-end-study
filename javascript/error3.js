process.on("uncaughtException", (err) => {
    console.error("unexcepted error", err)
})

setInterval(() => {
    throw new Error("i will broken your server!")
}, 1000);

setTimeout(() => {
    console.log("it's run!")
}, 2000);
