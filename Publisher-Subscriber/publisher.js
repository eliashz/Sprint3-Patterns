const amqp = require('amqplib');
const queue = process.env.QUEUE || 'hello';

const messagesAmount = 6;
const wait = 400;

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function sleepLoop(number, cb) {
    while(number--) {
        await sleep(wait);
        cb();
    }
}

async function exitAfterSend() {
    await sleep(messagesAmount * wait * 1.2);
    process.exit(0);
}

async function subscriber() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
}