let index = 0;
for (let i = 0; i<10000000; i++){
    index = i;
}

//Receber mensagens do processo pai:
process.on("message", x => {
    //enviar mensagens para o processo pai:
    process.send(index);
});