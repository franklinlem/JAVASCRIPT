const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const idade = Number(frm.inIdade.value);
  const anoAtual = new Date().getFullYear();
  const anoNascimento = anoAtual - idade;
  resp.innerHTML = `Você nasceu em ${anoNascimento}.`;
});
