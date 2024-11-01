const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2
    resp1.innerText = `Média das notas = ${media.toFixed(2)}`
    if (media >= 4.5){
        resp2.innerText = `Parabéns ${nome}! Você foi APROVADO!!!`
        resp2.style.color = "blue"
    } else {
        resp2.innerText = `Infelizmente ${nome}, você foi REPROVADO!!!`
        resp2.style.color = "red"
    }
    e.preventDefault()
})