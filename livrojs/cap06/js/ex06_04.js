const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const criancas = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({nome, idade})  //adiciona os dados ao vetor
    frm.reset()  //limpa campos do formulario
    frm.inNome.focus()  //posiciona no campo do formulario
    frm.btListar.dispatchEvent(new Event('click'))  //dispara click em btListar
})

frm.btListar.addEventListener('click', () => {
    
})