
// Creamos la función prototipo CuentaBancaria con los atributos nombre, dni y saldo
function CuentaBancaria(nombre, dni, saldo = 0){
    // Damos valor a los atributos (el valor real se dará al crear cada objeto)
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    // Creamos el atributo numeroCuenta fuera del constructor
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');

    // Creamos una función para mostrar los datos de la cuenta
    this.mostrarDatos = function(){
        console.log(`Nombre: ${this.nombre}\nDNI: ${this.dni}\nNúmero de Cuenta: ${this.numeroCuenta}\nSaldo: ${this.saldo}€`);
    }

    // Creamos una función para realizar un ingreso a la cuenta de la cantidad especificada en el atributo de entrada "monto"
    this.realizarIngreso = function(monto){
        if(monto < 0){
            console.log("INGRESA UNA CANTIDAD CORRECTA"); // Si la cantidad a ingresar es menor que 0 saldrá este mensaje por consola
        }else{
            this.saldo += monto; // Sumamos al saldo de la cuenta la cantidad especificada en monto
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`); //Sacamos este mensaje por consola
        }
    }

    // Creamos una función para realizar un retiro a la cuenta de la cantidad especificada en el atributo de entrada "monto"
    this.realizarRetiro = function(monto){
        if(monto < 0){
            console.log("INGRESA UNA CANTIDAD CORRECTA");// Si la cantidad a ingresar es menor que 0 saldrá este mensaje por consola
        }else{
            this.saldo -= monto; // Restamos al saldo de la cuenta la cantidad especificada en monto
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`); //Sacamos este mensaje por consola
        }
    }

    // Creamos una función para realizar una transferencia a la cuenta especificada en el primer parámetro de entrada de la cantidad especificada en el atributo de entrada "monto"
    this.realizarTransferencia = function(cuentaDestino, monto){
        if((monto < 0) || (monto > this.saldo)){ //Si la cantidad a transferir es menor que 0 o mayor que el saldo total de la cuenta saldrá un mensaje de error
            console.log("INGRESA UNA CANTIDAD CORRECTA"); 
        }else{
            cuentaDestino.realizarIngreso(monto); // Se realizará un ingreso a la cuenta especificada
            this.saldo -= monto; // Restamos al saldo de la cuenta sobre la que actúa la función la cantidad especificada en monto
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`); //Sacamos este mensaje por consola
        }
    }
}

let juan = new CuentaBancaria("Juan Pérez", "12345678A", 1000); //Creamos un objeto de CuentaBancaria para Juan
let ana = new CuentaBancaria("Ana Gómez", "87654321B", 500); //Creamos un objeto de CuentaBancaria para Ana

// Mostramos los datos de ambos
juan.mostrarDatos();
ana.mostrarDatos();

// Realizamos una transferencia desde la cuenta de Juan a la de Ana de 100€
juan.realizarTransferencia(ana, 100);

// Mostramos los datos de nuevo para comprobar que se ha ejecutado todo correctamente
juan.mostrarDatos();
ana.mostrarDatos();


