const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const maxima = Number(frm.inMaxima.value)
  const condutor = Number(frm.inCondutor.value)
  const acima = (condutor - maxima) / maxima * 100
  let tolerancia = maxima
  if (maxima <= 100){
    tolerancia = maxima + 7
  } if (maxima > 100){
    tolerancia = maxima * 1.07
  }
 
  if (condutor <= tolerancia){
    resp.textContent = `A tolerancia é de ${tolerancia} km/h. Sua velocidade está de acordo com o limite de velocidade!`
  } if (condutor > tolerancia && condutor <= maxima*1.2){
    resp.textContent = `Acima do limite de velocidade em ${acima.toFixed(1)}%. Multa média!`
  } if (condutor > tolerancia && condutor > maxima*1.2){
    resp.textContent = `Acima do limite de velocidade em ${acima.toFixed(1)}%. Multa grave!`
  } if (condutor > (maxima * 1.5)){
    resp.textContent = `Acima do limite de velocidade em ${acima.toFixed(1)}%. Multa gravíssima!`
  } 
})