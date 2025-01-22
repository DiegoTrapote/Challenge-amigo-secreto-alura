// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;
    listaAmigos.push(amigoNuevo);
    console.log(amigoNuevo);
    console.log(listaAmigos);
    limpiarCaja();
}

function limpiarCaja() {

    document.getElementById('amigo').value = ' ';
    
}