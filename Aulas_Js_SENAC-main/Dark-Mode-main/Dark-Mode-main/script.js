// Seleciona a tag <body> do documento HTML e guarda dentro da variável 'body'.
// Isso permite manipular o corpo inteiro da página (como trocar classes, cores, etc).
var body = document.querySelector("body");

// Seleciona o botão que tem a classe 'btn-dark-mode' no HTML e guarda dentro da variável.
// Esse botão será responsável por ativar ou desativar o modo escuro.
var btnDarkMode = document.querySelector(".btn-dark-mode");

// Declara a função 'darkMode' que vai alternar entre o modo claro e o modo escuro da página.
function darkMode() {
    
    // 'classList.toggle' adiciona a classe 'dark-mode' se ela não existir,
    // e remove se ela já existir. O retorno é TRUE se a classe foi adicionada
    // e FALSE se a classe foi removida.
    if (body.classList.toggle("dark-mode")) {
        
        // Se o modo escuro foi ativado (classe adicionada),
        // o texto do botão muda para "Desativar modo escuro".
        btnDarkMode.textContent = "Desativar modo escuro"
    } 
    else {
        // Caso contrário, se o modo escuro foi desativado (classe removida),
        // o texto do botão muda para "Ativar modo escuro".
        btnDarkMode.textContent = "Ativar modo escuro"
    }
}
// Sempre que o botão for clicado, a função 'darkMode' será chamada.
btnDarkMode.addEventListener("click", darkMode);
