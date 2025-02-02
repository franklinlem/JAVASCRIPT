//const vetor = palavra.match(/[A-Z]/g)

const palavra = "#SenhA_123!"

const vetor1 = palavra.match(/[a-z]/g)  //busca letras minúsculas
console.log(vetor1)

const vetor2 = palavra.match(/[A-Z]/g)  //busca letras maiusculas
console.log(vetor2)

const vetor3 = palavra.match(/[0-9]/g)  //busca os números
console.log(vetor3)

const vetor4 = palavra.match(/\W|_/g)   //busca os símbolos(\W) ou "_"
console.log(vetor4)

const vetor5 = palavra.match(/[T-Z]/g)  //busca maiusculas entre T e Z
console.log(vetor5)                     //senão houver caracteres pesquisados retorna "null"
