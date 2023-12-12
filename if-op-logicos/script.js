// Creamos la función saludarSegunHora
function saludarSegunHora(){
    let fecha = new Date(); // Creamos el objeto fecha con la fecha de hoy
    let horaActual = fecha.getHours(); // Creamos una variable con la hora actual, esto se consigue gracias al .getHours()


    // Creamos una estructura de control la cual saluda al usuario según sea la hora:  5 – 12 “buenos días”; 12 – 18 “buenas tardes” y lo demás “buenas noches”.
    if((horaActual >= 5) && (horaActual <= 12)){
        document.write(`<p>¡Buenos días!</p>`)
    }else if((horaActual >= 12) && (horaActual <= 18)){
        document.write(`<p>¡Buenas tardes!</p>`)
    }else{
        document.write(`<p>¡Buenas noches!</p>`)
    }
}

//Llamamos a la función saludarSegunHora()
saludarSegunHora();