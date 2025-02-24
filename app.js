// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if(validarNombre(nombre)) {
        amigos.push(nombre);
    }
    actualizarListaAmigos();
    input.value = '';
}

function actualizarListaAmigos () {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let nombreAmigo = document.createElement('li');
        nombreAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nombreAmigo);
    }
}

function validarNombre (nombre) {
    if (nombre === ''){
        alert('Por favor inserte un nombre.');
        return false;
    } else if (amigos.includes(nombre)) {
        alert('¡Nombre repetido!');
        return false;
    } else {
        return true;
    }
}

function sortearAmigo () {
    if(amigos.length != 0){
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        document.getElementById("listaAmigos").innerHTML = '';
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAmigo]}`;
    } else {
        alert('No ha ingresado nombres');
    }
}