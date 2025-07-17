const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100 //multa por atraso
const TAXA_JUROS = 0.33 / 100 //juros por dia de atraso

frm.addEventListener("submit", (e) => {
  e.preventDefault() //evita o envio do formulario
  
  const dataVenc = frm.inDataVenc.value //pega a data de vencimento
  const valor = Number(frm.inValor.value) //pega o valor do boleto
  const hoje = new Date() //pega a data atual
  const vencto = new Date() //converte a data de vencimento para objeto Date

  const partes = dataVenc.split("-") //separa a data de vencimento em partes
  vencto.setDate(Number(partes[2])) //ajusta o dia
  vencto.setMonth(Number(partes[1]) - 1) //ajusta o mês (0-11)
  vencto.setFullYear(Number(partes[0])) //ajusta o ano

  const atraso = hoje - vencto //calcula o atraso em milissegundos
  let multa = 0 // inicializa a multa
  let juros = 0 // inicializa os juros

  if (atraso > 0){
    const dias = atraso / 86400000 //converte milissegundos para dias
    multa = valor * TAXA_MULTA //calcula a multa
    juros = valor * TAXA_JUROS * dias //calcula os juros
  }

  const total = valor + multa + juros //calcula o total a pagar

  frm.outMulta.value = multa.toFixed(2) //exibe a multa
  frm.outJuros.value = juros.toFixed(2) //exibe os juros
  frm.outTotal.value = total.toFixed(2) //exibe o total a pagar
})