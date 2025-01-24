const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const funcionario = frm.inFuncionario.value.trim()
    if (!funcionario.includes(" ")) {
        alert("Informe o nome completo do Funcionario!")
        return
    }
    const nome = funcionario.indexOf(" ")
    const sobrenome = funcionario.lastIndexOf(" ")
    const cracha = funcionario.substr(0, nome) + funcionario.substr(sobrenome)

    resp. innerText = `Nome no Crachá: ${cracha}`
})