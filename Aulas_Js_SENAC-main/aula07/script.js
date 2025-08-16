
function Ola(){
    alert("Cartão cadastrado com sucesso!")
}

function Console(){
    console.log("Olá Dev")
}


document.getElementById("botao1").addEventListener("click", function(){
    alert("Olaaa")

})

document.getElementById("botao2").addEventListener("click", function(){
    console.log("Ola2")
})


function atualizarTexto(){

    let valor = document.getElementById("entrada").value;
    document.getElementById("atualizaTempoReal").innerText = valor;

}



let contadora = 0;

function cantarClick(){
    contadora ++;
    document.getElementById("contagem").innerText = contadora

}