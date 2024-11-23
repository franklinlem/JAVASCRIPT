frm = document.querySelector("form")
resp1 = document.querySelector("#outResp1")
resp2 = document.querySelector("#outResp2")
resp3 = document.querySelector("#outResp3")

addEventListener("submit", (e) => {
    e.preventDefault()
    const saque = Number(frm.inSaque.value)
    if (saque % 10 != 0){
        alert("O saque deve ser múltiplo de 10.")
        frm.inSaque.focus()
        return
    }
    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)
    if (notasCem > 0) {
        resp1.innerText = `Notas de 100: ${notasCem}`
    }
    if (notasCinquenta > 0){
        resp2.innerText = `Notas de 50: ${notasCinquenta}`
    }
    if (notasDez > 0){
        resp3.innerText = `Notas de 10: ${notasDez}`
    }
})