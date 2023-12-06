//calcular o fatorial de um numero

function fatorial(n){
    let fat = 1
    for(let c=n;c>0;c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(6))