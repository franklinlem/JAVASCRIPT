let num = [5,2,8]

num[3] = 4
num.push(0)

console.log(`Nosso vetor é ${num}`)

console.log(num.length)

console.log(num.sort())

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`O último valor do vetor é ${num[4]}`)

/*
for (var i = 0;i<num.length;i++){
    console.log(`O valor do vetor na posição ${i} é ` + num[i])
}
*/

for (let i in num){
    console.log(`O valor do vetor na posição ${i} é ` + num[i])   
}

pos = num.indexOf(3)
console.log(num.indexOf(3)) //não existe e retorna -1
    if (pos=-1){
        console.log('O valor não foi encontrado no vetor!')
    }
console.log(num.indexOf(5)) //procura o valor 5 no vetor e retorna a posição