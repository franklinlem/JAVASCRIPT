const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const senha = frm.inSenha.value
    const erros = []

    //verifica o tamanho da senha
    if (senha.length <8){
        erros.push("A senha deve ter no mínimo 8 caracteres")
    }

    //verifica se a senha possui numeros
    if(senha.match(/[0-9]/g) == null){
        erros.push("A senha deve conter pelo menos um número")
    }

    //verifica se a senha possui letras maiusculas
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g) == 1){
        erros.push("A senha deve conter pelo menos duas letras maiúsculas")
    }

    //verifica se a senha possui letras minusculas
    if(!senha.match(/[a-z]/g)){
        erros.push("A senha deve conter pelo menos uma letra minúscula")
    }

    //verifica se a senha possui caracteres especiais
    if(!senha.match(/[\W|_]/g)){
        erros.push("A senha deve conter pelo menos um caractere especial (ex: @, #, $, %, ^, &, *)")
    }

    //se o vetor erros estiver vazio e não foram encontrados erros, a senha será válida
    if (erros.length == 0){
        resp.innerText = "Ok! Senha confirmada!"
    } else{
        resp.innerText = `Incorreto! \n${erros.join(".\n ")}.`
    }
})