function inserirNome(callback){
    let nome = prompt("Insira seu nome: ");
    callback(nome);
}

function retornoChamada(nome){
    alert("Bem vindo " + nome + "!");
}

inserirNome(retornoChamada);
