const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let divisores = 0
    let div=[]
    for (let i=1; i<=numero; i++){
        if (numero % i == 0){
        divisores++
        div.push(i)
        }
    }
    if (divisores == 2){
        resp.innerText=`${numero} É UM NÚMERO PRIMO!!!`
    } else{
        resp.innerText=`${numero} NÃO É UM NÚMERO PRIMO! \nÉ divisível por ${div.join(', ')}.`
    }
})