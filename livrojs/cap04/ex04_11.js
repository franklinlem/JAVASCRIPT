const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', function(e) {
  e.preventDefault()
  const maxima = Number(frm.inMaxima.value)
  const condutor = Number(frm.inCondutor.value)
  const acima = (condutor-maxima)/maxima*100
 
  if (acima <= 0){
    resp.textContent = `Dentro do limite de velocidade`
  } if (acima > 0 && acima <= 20){
    resp.textContent = `Acima do limite de velocidade em ${acima.toFixed(1)}%. Multa média!`
  } if (acima > 20 && acima <= 50){
    resp.textContent = `Acima do limite de velocidade em ${acima.toFixed(1)}%. Multa grave!`
  } if (acima > 50){
    resp.textContent = `Acima do limite de velocidade em ${acima.toFixed(1)}%. Multa gravíssima!`
  } 
})