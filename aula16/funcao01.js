//função pra dizer se um numero é par ou impar

function parimp(num){
    if (num%2==0){
        return "Par"
    } else {
        return "Ímpar"
    }
}

let res = parimp(15)
console.log(res)