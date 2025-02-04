const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listner  
emitter.on('messageLogged', (arg) => {
    console.log(`Listener called... \n Arguments Receivend: ${arg}`)
});

// Raise an event 
emitter.emit('messageLogged', 1);


/*
    the order here matters if you register the listner
    after the event emit nothing will happen
    because when an event is raised or the emit method 
    is called, the emitter will iterates over all the 
    registered listner synchronously.
*/

