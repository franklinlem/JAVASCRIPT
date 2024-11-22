//Criar o worker:
let webWorker = new Worker("worker.js");

//Enviar uma mensagem:
webWorker.postMessage({ id: 1, nome: "João"});

//Receber uma mensagem:
webWorker.onmessage = e => console.log(e.data);
