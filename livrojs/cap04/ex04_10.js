frm = document.querySelector("form")
resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if (numero % 2 == 0) {
        resp.textContent = `${numero} é par`
    } else {
        resp.textContent = `${numero} é ímpar`
    }
})

