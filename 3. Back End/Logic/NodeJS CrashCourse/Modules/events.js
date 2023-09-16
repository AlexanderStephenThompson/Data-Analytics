const EventEmitter = require('events')

// Create a Class
class MyEmitter extends EventEmitter { }

// Create an EventEmitter
const myEmitter = new MyEmitter()

// An emitter object can have multiple things to emit.
myEmitter.on('event1', () => { console.log("Event 1 fired!") })
myEmitter.on('event2', () => { console.log("Event 2 fired!") })
myEmitter.on('event3', () => { console.log("Event 3 fired!") })

myEmitter.emit('event1')
