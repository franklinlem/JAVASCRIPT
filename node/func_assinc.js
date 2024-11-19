let msg = "Texto original!";

function mudaTexto(){
    return new Promise(resolve => {
        setTimeout ( () =>{
            msg = "Texto alterado!";
            resolve(msg);
        }, 1000);
    });
}

mudaTexto().then(res=>{
    console.log(res);
}).catch(err => {
    console.error(err);
});
