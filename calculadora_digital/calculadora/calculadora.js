function adicionar(valor) {
    let visor = document.getElementById("visor");

    visor.value = visor.value + valor;
}

function limpar() {
    document.getElementById("visor").value = "";
}

function calcular() {
    let visor = document.getElementById("visor");

    visor.value = eval(visor.value);
}