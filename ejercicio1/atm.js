// Datos de los clientes (puede ser un array de objetos)
const clientes = new Map([
    ['12345', { pin: '1234', cuentas: { ahorro: 500000, corriente: 100000 } }],
    ['67890', { pin: '5678', cuentas: { ahorro: 200000, corriente: 300000 } }]
]);

let clienteActual = null;

// Función para validar el cliente
function validarCliente() {
    const documento = document.getElementById('documento').value;
    const pin = document.getElementById('pin').value;
    
    if (clientes.has(documento)) {
        const cliente = clientes.get(documento);
        if (cliente.pin === pin) {
            clienteActual = cliente;
            document.getElementById('login').style.display = 'none';
            document.getElementById('menu').style.display = 'block';
            document.getElementById('resultados').innerHTML = `Bienvenido, cliente con documento: ${documento}`;
        } else {
            alert("PIN incorrecto. Intente de nuevo.");
        }
    } else {
        alert("Cliente no encontrado.");
    }
}

// Función para retirar dinero
function retirar() {
    const monto = parseInt(prompt("Ingrese el monto a retirar (múltiplos de $50000):"));
    if (monto % 50000 === 0) {
        if (clienteActual.cuentas.ahorro >= monto) {
            clienteActual.cuentas.ahorro -= monto;
            document.getElementById('resultados').innerHTML = `Retiro exitoso. Nuevo saldo: ${clienteActual.cuentas.ahorro}`;
        } else {
            alert("Fondos insuficientes.");
        }
    } else {
        alert("El monto debe ser en múltiplos de $50000.");
    }
}

// Función para depositar dinero
function depositar() {
    const monto = parseInt(prompt("Ingrese el monto a depositar:"));
    clienteActual.cuentas.ahorro += monto;
    document.getElementById('resultados').innerHTML = `Depósito exitoso. Nuevo saldo: ${clienteActual.cuentas.ahorro}`;
}

// Función para transferir dinero
function transferir() {
    const monto = parseInt(prompt("Ingrese el monto a transferir:"));
    if (clienteActual.cuentas.ahorro >= monto) {
        clienteActual.cuentas.ahorro -= monto;
        clienteActual.cuentas.corriente += monto;
        document.getElementById('resultados').innerHTML = `Transferencia exitosa. Nuevo saldo de ahorro: ${clienteActual.cuentas.ahorro}`;
    } else {
        alert("Fondos insuficientes.");
    }
}

// Función para consultar saldo
function consultarSaldo() {
    document.getElementById('resultados').innerHTML = `Saldo en ahorro: ${clienteActual.cuentas.ahorro} <br> Saldo en corriente: ${clienteActual.cuentas.corriente}`;
}

// Función para salir
function salir() {
    clienteActual = null;
    document.getElementById('login').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('resultados').innerHTML = '';
}
