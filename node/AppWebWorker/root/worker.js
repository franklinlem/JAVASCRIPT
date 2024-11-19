for (let i = 0; i < 10000000; i++){
    //Envia uma mensagem para o processo que chamou o worker:
    postMessage(i);
}