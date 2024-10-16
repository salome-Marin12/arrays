// Variables para estadísticas
let totalAtendidos = 0;
let llamadasAtendidas = 0;
let asesoriasEstudiantes = 0;
let asesoriasDirectivos = 0;

// Función para registrar atención
function registrarAtencion() {
    const cedula = document.getElementById('cedula').value;
    const tipoAtencion = document.getElementById('tipo-atencion').value;
    const tipoAsesoria = document.getElementById('tipo-asesoria').value;

    // Validar si la cédula está vacía
    if (!cedula) {
        alert('Por favor, ingrese el número de cédula.');
        return;
    }

    // Registrar según el tipo de atención
    if (tipoAtencion === 'llamada') {
        llamadasAtendidas++;
    } else if (tipoAtencion === 'asesoria') {
        if (tipoAsesoria === 'estudiante') {
            asesoriasEstudiantes++;
        } else if (tipoAsesoria === 'directivo') {
            asesoriasDirectivos++;
        }
    }

    totalAtendidos++;
    mostrarEstadisticas();
}

// Función para transferir de asesoría a llamada telefónica
function transferir() {
    const cedula = document.getElementById('cedula').value;

    // Validar si la cédula está vacía
    if (!cedula) {
        alert('Por favor, ingrese el número de cédula.');
        return;
    }

    // Transferencia de asesoría a llamada
    llamadasAtendidas++;
    totalAtendidos++;
    mostrarEstadisticas();
}

// Función para mostrar las estadísticas
function mostrarEstadisticas() {
    document.getElementById('resultado').innerHTML = `Total de usuarios atendidos: ${totalAtendidos}`;
    document.getElementById('estadisticas').innerHTML = `
        <p>Llamadas atendidas: ${llamadasAtendidas}</p>
        <p>Asesorías a estudiantes: ${asesoriasEstudiantes}</p>
        <p>Asesorías a directivos: ${asesoriasDirectivos}</p>
    `;
}

// Mostrar u ocultar los tipos de asesoría dependiendo de la opción seleccionada
document.getElementById('tipo-atencion').addEventListener('change', function() {
    const tipoAtencion = document.getElementById('tipo-atencion').value;
    if (tipoAtencion === 'asesoria') {
        document.getElementById('asesoria-tipo').style.display = 'block';
    } else {
        document.getElementById('asesoria-tipo').style.display = 'none';
    }
});

// Asignar funciones a los botones
document.getElementById('registrarAtencion').addEventListener('click', registrarAtencion);
document.getElementById('transferir').addEventListener('click', transferir);

