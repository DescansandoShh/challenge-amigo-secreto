// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

document.getElementById('amigo').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".button-add").click();
    }
});



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
        nombreAmigo.innerHTML = amigos[i];
        if (amigosSorteados.includes(i)) {
            nombreAmigo.innerHTML = "<s>" + nombreAmigo.innerHTML + "</s>";
        }
        listaAmigos.appendChild(nombreAmigo);
    }
    document.getElementById('resultado').innerHTML = '';
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
    if (amigosSorteados.length == amigos.length) {
        document.getElementById('resultado').innerHTML = 'Todos los nombres fueron sorteados.';
        return;
    }
    if (amigos.length != 0){
        let indiceAmigo = 0;

        do {
            indiceAmigo = Math.floor(Math.random() * amigos.length);
        } while (amigosSorteados.includes(indiceAmigo));
        amigosSorteados.push(indiceAmigo);

        document.getElementById("listaAmigos").innerHTML = '';
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAmigo]}`;
    } else {
        alert('No ha ingresado nombres');
    }
}