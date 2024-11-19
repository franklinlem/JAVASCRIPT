let msg = "Texto original!";

function mudaTexto(){
    msg = "Texto alterado!";
}

function retornoChamada(){
    mudaTexto();
    console.log(msg);
}

setTimeout(retornoChamada, 3000);