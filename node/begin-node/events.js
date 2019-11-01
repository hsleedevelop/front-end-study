// Loading the EventEmitter constructor
var EventEmitter = require('events').EventEmitter;

//In this case, we want the logger to emit Events by adding a listener
var logger = new EventEmitter();

// The following code demonstrates the syntax for listening to the error event,
// and executing the callback function
logger.on('error', function(message) {
    console.log('ERR: ' + message);
});

logger.on('error1', function(message) {
    console.log('ERR1: ' + message);
});

// The following code triggers the 'error' event
logger.emit('error', 'This is the first error');
logger.emit('error1', 'This is the second error');