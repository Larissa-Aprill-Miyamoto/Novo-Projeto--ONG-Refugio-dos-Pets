
const app = document.getElementById("conteudo");


function carregarPagina(pagina) {
  if (pagina === "inicio") {
    app.innerHTML = inicio;
  } else if (pagina === "projetos") {
    app.innerHTML = projetos;
  } else if (pagina === "cadastro") {
    app.innerHTML = cadastro;
    ativarValidacaoCadastro(); 
  } else if (pagina === "doacao") {
  app.innerHTML = doacao;
  ativarValidacaoDoacao(); 
  }


  window.scrollTo(0, 0);
}


carregarPagina("inicio");


document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); 
    const pagina = e.target.getAttribute("data-page");
    carregarPagina(pagina);
  });
});
