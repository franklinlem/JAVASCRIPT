const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const peso = Number(frm.inPeso.value)
    const total = preco * (peso / 1000)
    resp.innerText = `O valor a pagar é: R$ ${total.toFixed(2)}`

    e.preventDefault()
})