// 1. Troca o texto do parágrafo
function trocarTexto() {
  document.getElementById("meuParagrafo").innerText = "O texto foi trocado!";
}

// 2. Altera a cor de fundo da página conforme o usuário digita
function mudarCorPagina() {
  let cor = document.getElementById("corPagina").value;
  document.body.style.backgroundColor = cor;
}

// 3. Fundo azul e branco
function fundoAzul() {
  document.body.style.backgroundColor = "blue";
}
function fundoBranco() {
  document.body.style.backgroundColor = "white";
}

// 4. Altera a cor de fundo do parágrafo
function mudarCorParagrafo() {
  let cor = document.getElementById("corParagrafo").value;
  document.getElementById("meuParagrafo").style.color = cor;
}

// 5. Exibe alerta com hora atual
function mostrarHora() {
  let agora = new Date();
  alert("Hora atual: " + agora.toLocaleTimeString());
}

// 6. Exibe dados do formulário
function enviarFormulario(event) {
  event.preventDefault(); // evita recarregar a página
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  alert("Nome: " + nome + "\nEmail: " + email);
}
