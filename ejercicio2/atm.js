// Lista de reservas
const reservas = [];

// Función para realizar una reserva
function reservar() {
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const tipoHabitacion = document.getElementById('tipo-habitacion').value;
    const fumador = document.getElementById('fumador').value;
    const numPersonas = parseInt(document.getElementById('personas').value);
    const estadia = document.getElementById('estadia').value;
    const mascota = document.getElementById('mascota').value === 'si';

    // Validaciones
    if (tipoHabitacion === 'individual' && numPersonas > 2) {
        alert('No se puede exceder de 2 personas en una habitación individual.');
        return;
    } 
    if (tipoHabitacion === 'doble' && numPersonas > 4) {
        alert('No se puede exceder de 4 personas en una habitación doble.');
        return;
    } 
    if (tipoHabitacion === 'familiar' && numPersonas > 6) {
        alert('No se puede exceder de 6 personas en una habitación familiar.');
        return;
    }

    if (tipoHabitacion !== 'familiar' && mascota) {
        alert('Solo se permiten mascotas en habitaciones familiares.');
        return;
    }

    // Crear la reserva
    const reserva = {
        nombre,
        pais,
        tipoHabitacion,
        fumador: fumador === 'si' ? true : false,
        numPersonas,
        estadia,
        mascota
    };

    reservas.push(reserva);
    document.getElementById('resultado').innerHTML = `Reserva realizada para ${nombre}. Tipo de habitación: ${tipoHabitacion}.`;

    mostrarReservas();
}

// Función para mostrar todas las reservas
function mostrarReservas() {
    let reservasHtml = '<h2>Reservas realizadas:</h2>';
    reservas.forEach((reserva, index) => {
        reservasHtml += `
            <div>
                <h3>Reserva ${index + 1}</h3>
                <p>Nombre: ${reserva.nombre}</p>
                <p>País: ${reserva.pais}</p>
                <p>Tipo de habitación: ${reserva.tipoHabitacion}</p>
                <p>Fumador: ${reserva.fumador ? 'Sí' : 'No'}</p>
                <p>Número de personas: ${reserva.numPersonas}</p>
                <p>Estadía: ${reserva.estadia} días</p>
                <p>Mascota: ${reserva.mascota ? 'Sí' : 'No'}</p>
            </div>
            <hr>
        `;
    });

    document.getElementById('reservas').innerHTML = reservasHtml;
}

// Agregar el event listener al botón
document.getElementById('botonReservar').addEventListener('click', reservar);
