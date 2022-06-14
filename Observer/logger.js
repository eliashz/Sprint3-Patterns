const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('mensaje', { msg });
    }
}

module.exports = Logger;