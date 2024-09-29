const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const preco = frm.inPreco.value
    const tempo = frm.inTempo.value
    const total = Math.ceil(tempo/15) * preco
    
    resp.innerText = `Total a pagar = R$ ${total.toFixed(2)}!`

    e.preventDefault()
})