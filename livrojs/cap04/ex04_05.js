const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)

    if (numero >= 0){
        resp.innerText = `A raiz quadrada é ${raiz.toFixed(2)}!`
    } else{
        resp.innerText = "Não é possível calcular a raiz quadrada de número negativo!"
    }
})