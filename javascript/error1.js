setInterval(() => {
    console.log("start")
    try {
        throw new Error("i will broken the server.")
    } catch (err) {
        console.error(err)
    }
}, 1000);
