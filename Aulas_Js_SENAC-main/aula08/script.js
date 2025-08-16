// Função para adicionar item
function adicionarItem() {
  let input = document.getElementById("novoItem");
  let texto = input.value.trim();

  if (texto !== "") {
    // Cria <li>
    let li = document.createElement("li");
    li.innerText = texto;

    // Evento: destaque ao passar o mouse
    li.addEventListener("mouseover", function() {
      this.style.backgroundColor = "red";
    });
    li.addEventListener("mouseout", function() {
      this.style.backgroundColor = "";
    });

    // Evento: alternar classe ao clicar
    li.addEventListener("click", function() {
      this.classList.toggle("selecionado");
    });

    // Adiciona na lista
    document.getElementById("lista").appendChild(li);

    // Limpa input
    input.value = "";
  } else {
    alert("Digite um valor válido!");
  }
}

// Função para remover o último item da lista
function removerUltimo() {
  let lista = document.getElementById("lista");
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  } else {
    alert("A lista já está vazia!");
  }
}
