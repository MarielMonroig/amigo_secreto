// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar el nuevo amigo al array
    input.value = ""; // Limpiar el campo de entrada
    
    actualizarLista(); // Actualizar la lista en HTML
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = amigo; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregarlo a la lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
