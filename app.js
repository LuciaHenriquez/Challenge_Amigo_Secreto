let participantes = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (participantes.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    participantes.push(nombre);
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
    // Limpiar el input
    input.value = "";
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Se necesitan al menos 2 participantes.");
        return;
    }

    // Duplicamos la lista y la mezclamos aleatoriamente
    let shuffled = [...participantes];
    shuffled.sort(() => Math.random() - 0.5);

    // Asignar amigos secretos
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados previos

    for (let i = 0; i < shuffled.length; i++) {
        let giver = shuffled[i];
        let receiver = shuffled[(i + 1) % shuffled.length];

        let li = document.createElement("li");
        li.textContent = `${giver} ➡ ${receiver}`;
        resultado.appendChild(li);
    }
}