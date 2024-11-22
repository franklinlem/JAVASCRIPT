//Receber uma mensagem:
self.onmessage = e => console.log(e.data);

//Enviar uma mensagem:
self.onmessage({ id:1, nome:"João"});