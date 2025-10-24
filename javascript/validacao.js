document.addEventListener("submit", function (event) {
  const form = event.target;

  if (form.id === "formCadastro") {
    event.preventDefault();

    const nome = document.getElementById("nomeCompleto");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const nascimento = document.getElementById("nascimento");
    const endereco = document.getElementById("endereco");
    const cep = document.getElementById("cep");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

   
    document.querySelectorAll(".erro-validacao").forEach(el => el.remove());
    document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));

    let valido = true;

  
    function mostrarErro(campo, mensagem) {
      const erro = document.createElement("small");
      erro.classList.add("text-danger", "erro-validacao");
      erro.innerText = mensagem;
      campo.classList.add("is-invalid");
      campo.insertAdjacentElement("afterend", erro);
      valido = false;
    }

   
    if (nome.value.trim().length < 3) mostrarErro(nome, "Digite seu nome completo.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) mostrarErro(email, "Digite um e-mail válido.");

    const cpfNumeros = cpf.value.replace(/\D/g, "");
    if (cpfNumeros.length !== 11) {
      mostrarErro(cpf, "O CPF deve conter 11 números.");
    }

    const telNumeros = telefone.value.replace(/\D/g, "");
    if (telNumeros.length < 10 || telNumeros.length > 11) {
      mostrarErro(telefone, "Digite um telefone válido com DDD (ex: (11) 98765-4321).");
    }

    if (!nascimento.value) mostrarErro(nascimento, "Informe sua data de nascimento.");

    if (endereco.value.trim().length < 5) mostrarErro(endereco, "Digite um endereço válido.");

    const cepRegex = /^\d{5}-?\d{3}$/;
    if (!cepRegex.test(cep.value.trim())) mostrarErro(cep, "Digite um CEP válido (ex: 12345-678).");

    if (cidade.value.trim().length < 2) mostrarErro(cidade, "Digite o nome da cidade.");

    if (!estado.value) mostrarErro(estado, "Selecione o estado.");

   
    if (valido) {
      alert("✅ Cadastro realizado com sucesso!");
      form.reset();
    } else {
      alert("⚠️ Corrija os campos destacados antes de enviar.");
    }
  }
});


document.addEventListener("input", function (e) {
  const t = e.target;

  if (t.id === "cpf") {
    t.value = t.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  if (t.id === "telefone") {
    t.value = t.value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  }

  if (t.id === "cep") {
    t.value = t.value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
});

function ativarValidacaoDoacao() {
  const form = document.getElementById("formDoacao");
  const lista = document.getElementById("listaDoacoes");
  const msg = document.getElementById("doacaoMensagem");

  if (!form) return;


  carregarHistorico();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = document.getElementById("valor").value.trim();
    const metodo = document.getElementById("metodo").value;

    if (!valor || valor < 5 || !metodo) {
      msg.style.color = "red";
      msg.textContent = "⚠️ Por favor, preencha todos os campos corretamente (valor mínimo R$ 5).";
      return;
    }

    const doacao = {
      valor: parseFloat(valor).toFixed(2),
      metodo,
      data: new Date().toLocaleString("pt-BR"),
    };

  
    const historico = JSON.parse(localStorage.getItem("doacoes")) || [];
    historico.push(doacao);
    localStorage.setItem("doacoes", JSON.stringify(historico));

    msg.style.color = "green";
    msg.textContent = `Obrigado pela sua doação de R$ ${doacao.valor} via ${doacao.metodo.toUpperCase()}!`;

    form.reset();
    carregarHistorico(); 
  });

  function carregarHistorico() {
    const historico = JSON.parse(localStorage.getItem("doacoes")) || [];
    lista.innerHTML = "";

    if (historico.length === 0) {
      lista.innerHTML = `<li class="list-group-item text-center text-muted">Nenhuma doação registrada ainda.</li>`;
      return;
    }

    historico
      .slice()
      .reverse()
      .forEach((d) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
          <span><strong>R$ ${d.valor}</strong> - ${d.metodo.toUpperCase()}</span>
          <small class="text-muted">${d.data}</small>
        `;
        lista.appendChild(li);
      });
  }
}
