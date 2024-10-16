// Arreglo para almacenar las citas
let citasProgramadas = [];

// Función para programar una nueva cita
function programarCita() {
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const fechaCita = document.getElementById('fechaCita').value;
    const horaCita = document.getElementById('horaCita').value;
    const medicoAsignado = document.getElementById('medicoAsignado').value;

    // Validación simple
    if (!nombrePaciente || !fechaCita || !horaCita || !medicoAsignado) {
        alert('Por favor, complete todos los campos para programar la cita.');
        return;
    }

    // Crear un objeto de cita
    const nuevaCita = {
        nombrePaciente,
        fechaCita,
        horaCita,
        medicoAsignado
    };

    // Agregar la cita al arreglo de citas programadas
    citasProgramadas.push(nuevaCita);

    // Ordenar las citas por fecha y hora
    citasProgramadas.sort((a, b) => {
        const fechaA = new Date(`${a.fechaCita} ${a.horaCita}`);
        const fechaB = new Date(`${b.fechaCita} ${b.horaCita}`);
        return fechaA - fechaB;
    });

    // Actualizar la lista de citas en la interfaz
    mostrarCitas();

    // Limpiar los campos de entrada
    document.getElementById('nombrePaciente').value = '';
    document.getElementById('fechaCita').value = '';
    document.getElementById('horaCita').value = '';
    document.getElementById('medicoAsignado').value = '';
}

// Función para mostrar todas las citas programadas
function mostrarCitas() {
    const listaCitas = document.getElementById('listaCitas');
    listaCitas.innerHTML = ''; // Limpiar la lista

    if (citasProgramadas.length === 0) {
        listaCitas.innerHTML = '<p>No hay citas programadas.</p>';
        return;
    }

    // Mostrar cada cita programada
    citasProgramadas.forEach(cita => {
        const citaElement = document.createElement('div');
        citaElement.innerHTML = `
            <p>Paciente: ${cita.nombrePaciente} | Fecha: ${cita.fechaCita} | Hora: ${cita.horaCita} | Médico: ${cita.medicoAsignado}</p>
        `;
        listaCitas.appendChild(citaElement);
    });
}

// Función para cancelar una cita
function cancelarCita() {
    const nombrePaciente = document.getElementById('cancelarNombrePaciente').value;

    if (!nombrePaciente) {
        alert('Por favor, ingrese el nombre del paciente para cancelar la cita.');
        return;
    }

    // Filtrar el arreglo para eliminar la cita del paciente indicado
    const citasFiltradas = citasProgramadas.filter(cita => cita.nombrePaciente !== nombrePaciente);

    if (citasFiltradas.length === citasProgramadas.length) {
        alert(`No se encontró ninguna cita para el paciente: ${nombrePaciente}`);
    } else {
        citasProgramadas = citasFiltradas;
        alert(`La cita del paciente ${nombrePaciente} ha sido cancelada.`);
    }

    // Actualizar la lista de citas en la interfaz
    mostrarCitas();

    // Limpiar el campo de entrada
    document.getElementById('cancelarNombrePaciente').value = '';
}

// Asignar funciones a los botones
document.getElementById('programarCita').addEventListener('click', programarCita);
document.getElementById('cancelarCita').addEventListener('click', cancelarCita);

// Mostrar citas al cargar la página
mostrarCitas();
