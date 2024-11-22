const { fork } = require("child_process");
const child = fork("child.js");

//Enviar um sinal para o processo filho inicial:
child.send("start");

//Receber mensagens do processo filho:
child.on("message", x => {
    console.log(x);
})
