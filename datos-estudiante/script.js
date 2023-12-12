/*En el Directorio datos-estudiante deberá crear un script que pregunte su nombre, apellidos, su edad y el ciclo formativo que cursa. Los mostrará en la página web. Cada dato debe ser preguntado en una ventana emergente distinta y mostrarlo en una línea distinta, en el campo del ciclo deberá mostrar el texto por defecto “DAW”.*/

let nombre = prompt("¿Cuál es tu nombre?"); //Preguntamos el nombre
let apellidos = prompt("¿Cuáles son tus apellidos?"); //Preguntamos los apellidos
let edad = parseInt(prompt("¿Cuál es tu edad?")); //Preguntamos la edad convirtiendo la variable a entero
let ciclo = prompt("¿Qué ciclo formativo cursas?", "DAW").toUpperCase(); //Preguntamos el ciclo, poniendo por defecto "DAW", en caso de escribirlo en minúscula, se mostrará en mayúscula gracias al toUpperCase()


// Mostramos en el navegador los datos introducidos.
document.write(`Tu nombre es: ${nombre} <br/>Tus apellidos son: ${apellidos} <br/>Tu edad es: ${edad} <br/>Tu Ciclo Formativo es: ${ciclo}`);
