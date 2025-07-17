const senha = "ABACAD"

const senha1 = senha.replace("A", "X")
console.log(senha1) // XBACAD

const senha2 = senha.replace(/A/g, "X")
console.log(senha2) // XBXCXD

const app = "App Controle Financeiro"

const app2 = app.replace(" ", "")
console.log(app2) // AppControle Financeiro

const app3 = app.replace(/ /g, "")
console.log(app3) // AppControleFinanceiro

const app4 = app.replace(/ /g, "").toLowerCase()
console.log(app4) // appcontrolefinanceiro