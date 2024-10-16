// Array para la cola de espera y contador de turnos
let colaEspera = [];
let contadorTurnos = 0;

// Función para tomar un turno
function tomarTurno() {
    contadorTurnos++;
    colaEspera.push(contadorTurnos); // Agrega el turno a la cola
    actualizarEstado();
}

// Función para llamar al siguiente cliente
function llamarCliente() {
    if (colaEspera.length === 0) {
        alert("No hay clientes en la cola de espera.");
        return;
    }
    
    const turnoLlamado = colaEspera.shift(); // Llama y elimina al primer cliente en la cola
    document.getElementById('turnoActual').innerText = `Turno Actual: ${turnoLlamado}`;
    actualizarEstado();
}

// Función para mostrar la cola de espera
function mostrarCola() {
    if (colaEspera.length === 0) {
        document.getElementById('colaEspera').innerText = "Cola de Espera: Vacía";
    } else {
        document.getElementById('colaEspera').innerText = `Cola de Espera: ${colaEspera.join(', ')}`;
    }
}

// Función para actualizar el estado general del sistema
function actualizarEstado() {
    document.getElementById('contadorTurnos').innerText = `Turnos tomados: ${contadorTurnos}`;
    mostrarCola();
}

// Asignar funciones a los botones
document.getElementById('tomarTurno').addEventListener('click', tomarTurno);
document.getElementById('llamarCliente').addEventListener('click', llamarCliente);
document.getElementById('mostrarCola').addEventListener('click', mostrarCola);
