const EventEmitter = require("events")

const myEvent = new EventEmitter()
myEvent.addListener("event1", () => { //event listening
    console.log("event-1")
})

myEvent.on("event2", () => {
    console.log("event-2")
})

myEvent.on("event2", () => { //multiple..
    console.log("event-2-append")
})

myEvent.emit("event1")
myEvent.emit("event2")

myEvent.once("event3", () => { //once!!
    console.log("event-3")
})

myEvent.emit("event3")
myEvent.emit("event3")

myEvent.once("event4", () => {
    console.log("event-4")
})

myEvent.removeAllListeners("event4") //remove all listener
myEvent.emit("event4")

const listener = () => {
    console.log("event-5")
}

myEvent.on("event5", listener)
myEvent.removeListener("event5", listener) //remove a listener .off()
myEvent.off("event5", listener)
myEvent.emit("event5")

console.log(myEvent.listenerCount("event2")) //count
