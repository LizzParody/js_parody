const { Worker } = require('worker_threads');

const worker = new Worker(`
const { parentPort } = require('worker_threads');
parentPort.once('message',
    message => parentPort.postMessage({ Learning: message }));  
`, { eval: true });
worker.on('message', message => console.log(message));      
worker.postMessage('Worker Threads'); 