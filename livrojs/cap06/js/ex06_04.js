const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({nome, idade})  //adiciona os dados ao vetor
    frm.reset()  //limpa campos do formulario
    frm.inNome.focus()  //posiciona no campo do formulario
    frm.btListar.dispatchEvent(new Event("click"))  //dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert('Não há crianças na lista!')
        return
    }
    let lista = ""
    for (const crianca of criancas) {
        const {nome, idade} = crianca    //desestrutura a lista de criancas
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista
})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert('Não há crianças na lista!')
        return
    }
    const copia = [...criancas]   //cria cópia do vetor criancas
    copia.sort((a,b) => a.idade - b.idade)   //ordena pela idade
    
    let resumo = ""
    
    let aux = copia[0].idade   //menor idade do vetor
    
    let nomes = []
    for (const crianca of copia){
        const {nome, idade} = crianca
        if (idade == aux){   //se é da mesma idade de aux
            nomes.push(nome)   //adiciona ao vetor
        } else {    //senão monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " crianca(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade   //obtém a nova idade na ordem
            nomes = []     //limpa o vertor nomes
            nomes.push(nome)   //adiciona o primeiro da nova idade
        }
    }
    // adiciona a última criança
    resumo += aux + " ano(s): " + nomes.length + " crianca(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo   //exibe a resposta
})