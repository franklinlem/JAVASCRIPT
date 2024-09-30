const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const produto3 = Number(preco * 0.50)
    const promo = Number((preco*3) - (preco * 0.50))
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${promo.toFixed(2)}!!!`
    resp2.innerText = `Nesta Promoção o 3º produto sai por apenas R$ ${produto3.toFixed(2)}!!!`
    e.preventDefault()
})