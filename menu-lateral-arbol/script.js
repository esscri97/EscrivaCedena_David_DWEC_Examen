// Creamos una constante llamada "flechas" que coja todos los elementos los cuales tengan la clase "arrow"
const flechas = document.querySelectorAll('.arrow');

// Recorremos todos los elementos antes establecidos con un forEach asignando a cada uno el nombre "flecha"
flechas.forEach(flecha => {

    // Añadimos un evento el cual, al hacer click en cada elemento "flecha" realizará una función (anónima en este caso)
    flecha.addEventListener('click', function() {

        // Creamos una constante llamada "subMenu" para el próximo elemento hermano del elemento padre de la flecha
        const subMenu = this.parentElement.nextElementSibling;

        // Accedemos a la lista de clases del elemento "subMenu" y añadimos o quitamos "show" a su clase cada vez que hagamos click 
        //sobre el elemento flecha, esto mostrará el submenu
        subMenu.classList.toggle('show');

        // Accedemos a la lista de clases del elemento "flecha" y añadimos o quitamos "show" a su clase cada vez que hagamos click 
        //sobre el elemento flecha, esto girará la flecha 90 grados
        this.classList.toggle('rotate-arrow');

    })
})