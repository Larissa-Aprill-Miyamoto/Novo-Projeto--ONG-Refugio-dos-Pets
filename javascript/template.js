/* -----------------------------
   Inicio
--------------------------------*/
const inicio = `
<div class="text-center inro-section"><h1>Bem-vindo ao Refúgio dos Pets!</h1>
  <p>Conheça nossa missão e descubra como ajudar a transformar vidas.</p>

    <img src="./assets/img/caes-gatos-1.jpg" class="card-img-top" alt="cão farejando um gato">
    <p>O Refúgio dos Pets é uma organização dedicada à causa animal. Nossa missão é resgatar, reabilitar e encontrar um lar definitivo e amoroso para cada animal que sofreu com o abandono ou maus-tratos. Acreditamos firmemente que todo pet merece carinho, segurança e um lugar quentinho para chamar de lar</p>
    <Todo>Todo o nosso trabalho se estrutura em etapas essenciais para garantir o bem estar dos bichinhos. Nossa equipe parte ao resgate e leva os pets para nossa organização, onde eles recebem cuidados veterinários como vacinação, castração e tratamento de doenças, além de carinho e socialização para recuperar a saúde física e emocional.</p> 
  </div>
`;

/* -----------------------------
   Projetos
--------------------------------*/
const projetos = `
  <section class="projetos-section container">
    <div class="text-center mb-4">
      <h1>Nossos Projetos</h1>
    </div>

    <!-- Início da linha que contém todos os cards -->
    <div class="row justify-content-center g-4">
      
      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <video class="card-img-top" controls title="Um gato abandonado.">
            <source src="./assets/video/14521046 2160 3840 60Fps.1.mp4" type="video/mp4">
            Seu navegador não suporta vídeos.
          </video>
          <div class="card-body">
            <h5 class="card-title">Resgates de Emergência: Segurança para quem precisa urgente</h5>
            <p>Este é o ponto de partida da nossa missão: retirar animais de situações de perigo iminente.</p>
            <p>Atuamos prontamente mediante denúncias ou identificação de animais em situação crítica nas ruas como atropelamentos, abandono recente ou maus-tratos.</p>
            <p>Equipe disponível 24h para atender aos chamados com transporte adequado e equipe treinada em resgate.</p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <img src="./assets/img/um-zoom-no-veterinario-a-cuidar-de-um-gato_23-2149100172.jpg" class="card-img-top" alt="Uma veterinária de máscara e uniforme azul segurando um gato no colo">
          <div class="card-body">
            <h5 class="card-title">Centro de Reabilitação: Saúde integral e recuperação emocional</h5>
            <p>Este projeto abrange toda a fase de reabilitação, focando na cura física e mental dos nossos protegidos. Oferecemos cuidados veterinários completos e de excelência, que incluem vacinação, vermifugação e, primordialmente, a castração para controle populacional e prevenção de doenças.</p>
            <p>Tão importante quanto a saúde física é a recuperação do espírito. Nossa equipe de voluntários dedica tempo e carinho na socialização, manejo e estímulos positivos, ajudando cada pet a superar traumas e a reaprender a confiar. O animal deixa de ser um sobrevivente da rua e se torna um pet saudável, equilibrado e pronto para o convívio familiar.</p>
            <p>Espaço equipado para casos de internação com acompanhamento de veterinários 24 horas.</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <video class="card-img-top" controls title="Uma mulher segurando um gato e apresentando ele para seu cachorro.">
            <source src="./assets/video/istockphoto-1474186586-640_adpp_is.mp4" type="video/mp4">
            Seu navegador não suporta vídeos.
          </video>
          <div class="card-body">
            <h5 class="card-title">Feiras de Adoção: Promovendo o encontro perfeito</h5>
            <p>Nosso maior objetivo é o "Lar Para Sempre". Este projeto garante que o final feliz seja seguro e definitivo. Nosso processo de adoção é criterioso e humanizado, realizamos entrevistas, visitas e avaliações para garantir que a família e o animal sejam compatíveis em estilo de vida e necessidades.</p>
            <p>Promovemos ativamente a guarda responsável, informando e conscientizando os futuros tutores sobre todos os deveres envolvidos, desde alimentação adequada até cuidados de saúde e atenção emocional.</p>
            <p>Nosso foco é reduzir a zero a chance de um novo abandono, assegurando que o novo lar seja seguro, amoroso e para a vida.</p>
          </div>
        </div>
      </div>

    </div> <!-- fim da row -->
  </section>
`;

/* -----------------------------
   Cadastro de voluntários
--------------------------------*/
const cadastro = `
  <section class="container my-5">
    <div class="text-center mb-4">
      <h1 class="fw-bold titulo-voluntario">Cadastro de Voluntário</h1>
      <p>Preencha seus dados para fazer parte do Refúgio dos Pets!</p>
    </div>
 
     <form id="formCadastro" class="mx-auto bg-white p-4 rounded-4 shadow-sm" style="max-width: 600px;">
      <!-- Nome -->
      <div class="mb-3">
        <label for="nomeCompleto" class="form-label fw-semibold">Nome completo</label>
        <input type="text" class="form-control" id="nomeCompleto" placeholder="Ex: Maria Silva">
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label fw-semibold">E-mail</label>
        <input type="email" class="form-control" id="email" placeholder="exemplo@email.com">
      </div>

      <!-- CPF e Telefone -->
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cpf" class="form-label fw-semibold">CPF</label>
          <input type="text" class="form-control" id="cpf" maxlength="14" placeholder="000.000.000-00">
        </div>
        <div class="col-md-6 mb-3">
          <label for="telefone" class="form-label fw-semibold">Telefone</label>
          <input type="text" class="form-control" id="telefone" maxlength="15" placeholder="(00) 00000-0000">
        </div>
      </div>

      <!-- Data de nascimento -->
      <div class="mb-3">
        <label for="nascimento" class="form-label fw-semibold">Data de nascimento</label>
        <input type="date" class="form-control" id="nascimento">
      </div>

      <!-- Endereço -->
      <div class="mb-3">
        <label for="endereco" class="form-label fw-semibold">Endereço</label>
        <input type="text" class="form-control" id="endereco" placeholder="Rua, número, complemento">
      </div>

      <!-- CEP, Cidade e Estado -->
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="cep" class="form-label fw-semibold">CEP</label>
          <input type="text" class="form-control" id="cep" maxlength="9" placeholder="00000-000">
        </div>

        <div class="col-md-5 mb-3">
          <label for="cidade" class="form-label fw-semibold">Cidade</label>
          <input type="text" class="form-control" id="cidade" placeholder="Ex: São Paulo">
        </div>

        <div class="col-md-3 mb-3">
          <label for="estado" class="form-label fw-semibold">Estado</label>
          <select id="estado" class="form-select">
            <option value="">UF</option>

            <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
            <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
            <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
            <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
            <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
            <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
            <option>SP</option><option>SE</option><option>TO</option>
          </select>
        </div>
      </div>

      <!-- Botão -->
      <div class="text-center mt-4">
        <button type="submit" class="btn btn-doar w-100">Enviar agora</button>
      </div>
    </form>
  </section>
`;

/* -----------------------------
   Doação
--------------------------------*/
const doacao = `
<main class="container">
    <p class="text-center mt-4"> Se você não tem tanto tempo livre, mas mesmo assim quer ajudar o Refúgio dos Pets, pode fazer uma doação!</p>

  <section id="doacao" class="doacao-section"><h2 class="text-center my-3">Faça uma Doação!</h2>
    <p class="text-center">Escolha o valor e o método de pagamento que preferir:</p>
  </section>

   <form id="formDoacao" class="mx-auto" style="max-width: 400px;">
        <div class="mb-3">
          <label for="valor" class="form-label">Valor (R$)</label>
          <input type="number" id="valor" name="valor" class="form-control" min="5" step="0.01" required placeholder="Ex: 20.00">
        </div>

        <div class="mb-3">
          <label for="metodo" class="form-label">Método de pagamento</label>
          <select id="metodo" name="metodo" class="form-select" required>
            <option value="">Selecione...</option>
            <option value="pix">PIX</option>
            <option value="cartão">Cartão de crédito</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit" class="btn btn-doar w-100">Doar agora</button>

      </form>

      <p id="doacaoMensagem" class="text-center mt-3 fw-bold"></p>

      <section class="mt-5">
        <h4 class="text-center">Histórico de Doações</h4>
        <ul id="listaDoacoes" class="list-group mt-2"></ul>
      </section>
    </section>

   <section class="contato mt-5 text-center">
       <img src="assets/img/pexels-lora-rikky-247863707-20693613.jpg" alt="Um gato andando num campo florido" class="img-fluid rounded" style="max-width: 500px;">
       <p class="mt-3">Muito obrigado(a) pela sua generosa doação! Seu apoio faz uma grande diferença. 🐶🐱</p>
     </section>
</main>
`;
 