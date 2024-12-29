const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = ''
let numContas = 0
let valTotal = 0

frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const descricao = frm.inDescricao.value
  const valor = Number(frm.inValor.value)
  const vencto = new Date(frm.inVencto.value)
  let data = vencto.toLocaleDateString('pt-BR')
  numContas++
  valTotal = valTotal + valor // valTotal += valor
  resposta = resposta + descricao + ' - R$ ' + valor.toFixed(2) + ' - Vencimento em ' + data + '\n'
  resp1.innerText = `${resposta} --------------------------------------------`
  resp2.innerText = `${numContas} Conta(s) - Total: R$ ${valTotal.toFixed(2)}`

  frm.inDescricao.value = '' //limpa campo
  frm.inValor.value = '' //limpa campo
  frm.inVencto.value = '' //limpa campo
  frm.inDescricao.focus() //coloca o foco no campo
  })