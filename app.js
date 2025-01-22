// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;
    listaAmigos.push(amigoNuevo);
    console.log(amigoNuevo);
    console.log(listaAmigos);
    actualizarLista(listaAmigos);
    limpiarCaja();
    
}

function limpiarCaja() {

    document.getElementById('amigo').value = ' ';
    
}

function actualizarLista(amigos){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ' ';
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}