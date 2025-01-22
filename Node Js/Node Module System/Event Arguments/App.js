const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Logging', (args) => {
    console.log(`Logging...${args.data}`)
})

emitter.emit('Logging', {id: 1, data: 'message'})