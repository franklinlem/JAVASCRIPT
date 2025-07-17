const hoje = new Date()
console.log(hoje) //2025-07-17T12:50:56.582Z

const hj = new Date()
const amanha = new Date()
const dia = amanha.getDate()
amanha.setDate(dia + 1)
console.log(`Hoje: ${hj}\nAmanhã: ${amanha}`)