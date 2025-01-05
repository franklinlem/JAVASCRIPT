const prompt = require('prompt-sync')()
const total = Number(prompt('Valor Total do Débito: R$ '))
const parcelas = Number(prompt('Nº de parcelas: '))
const parcela = Math.floor(total/parcelas)
const resto = total % parcelas
const ultima = parcela + resto
for (let i = 1; i < parcelas; i++){
    console.log(`${i}ª Parcela - R$ ${parcela.toFixed(2)}`)
}
console.log(`${parcelas}ª Parcela - R$ ${ultima.toFixed(2)}`)