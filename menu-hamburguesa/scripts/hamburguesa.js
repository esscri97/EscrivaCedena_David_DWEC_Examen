//FUNCIÓN FLECHA

// Creamos 2 constantes, una cogerá los elementos que tengan la clase "hamburger" y otra las que tengan la clase "nav-links"
const hamburguesa = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


// Creamos un evento el cual, al hacer click sobre el elemento que antes hemos llamado hamburguesa, haga una función, mediante función flecha
hamburguesa.addEventListener('click', () => {

    // Mediante classList accedemos a las clases del element antes llamado navLinks y mediante toggle añadimos y quitamos la clase "active" 
    // al hacer click (Gracias al evento)
    navLinks.classList.toggle('active');
});

// FUNCIÓN ANÓNIMA


// Creamos 2 constantes, una cogerá los elementos que tengan la clase "hamburger" y otra las que tengan la clase "nav-links"
/* const hamburguesa = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Creamos un evento el cual, al hacer click sobre el elemento que antes hemos llamado hamburguesa, haga una función, mediante función anónima
hamburguesa.addEventListener('click', function() {

    // Mediante classList accedemos a las clases del element antes llamado navLinks y mediante toggle añadimos y quitamos la clase "active" 
    // al hacer click (Gracias al evento)
    navLinks.classList.toggle('active');
}); */

// FUNCIÓN TOGGLENAV()

// Creamos 2 constantes, una cogerá los elementos que tengan la clase "hamburger" y otra las que tengan la clase "nav-links"
/* const hamburguesa = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


// creamos la función toggleNav() la cual al invocarla realizará lo que tenga dentro de la misma
function toggleNav(){

    // Mediante classList accedemos a las clases del element antes llamado navLinks y mediante toggle añadimos y quitamos la clase "active" 
    navLinks.classList.toggle('active');
}

// Creamos un evento, el cual al hacer click sobre el elemento "hamburguesa", ejecute la función toggleNav
hamburguesa.addEventListener('click', toggleNav); */