const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const promo = Math.floor(preco * 2)
    const desconto =  (preco *2) - promo

    outResp1.innerText = `Promoção de ${produto} `
    outResp2.innerText = `Leve 2 por apenas R$ ${promo.toFixed(2)} !!!`
    outResp3.innerText = `Desconto de R$ ${desconto.toFixed(2)} !!! Aproveite!!!`
    
    e.preventDefault()
})