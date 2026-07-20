const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataVenc = frm.inDataVenc.value;
  const valor = Number(frm.inValor.value);
  const TAXA_MULTA = Number(frm.inMulta.value);
  const TAXA_JUROS = Number(frm.inJuros.value);
  const hoje = new Date();
  const vencto = new Date(dataVenc);

  const partes = dataVenc.split("-");
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  const atraso = hoje - vencto;
  let multa = 0;
  let juros = 0;

  if (atraso > 0) {
    const dias = atraso / 86400000; //(1000 * 60 * 60 * 24);
    multa = valor * (TAXA_MULTA / 100);
    juros = valor * (TAXA_JUROS / 100) * dias;
  }
  const total = valor + multa + juros;

  frm.outMulta.value = multa.toFixed(2);
  frm.outJuros.value = juros.toFixed(2);
  frm.outTotal.value = total.toFixed(2);
});
