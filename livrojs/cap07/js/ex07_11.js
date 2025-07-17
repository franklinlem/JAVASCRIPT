const prompt = require('prompt-sync')()
const parcelas = Number(prompt('Quantas parcelas?'))
const data = new Date()
for (let i=1; i<=parcelas; i++){
    data.setMonth(data.getMonth() + 1)
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const dia1 = dia < 10 ? '0' + dia : dia
    const mes1 = mes < 10 ? '0' + mes : mes
    console.log(`${i}ª Parcela vence em: ${dia1}/${mes1}/${ano}`)
}