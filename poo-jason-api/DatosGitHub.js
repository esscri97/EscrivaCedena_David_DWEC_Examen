
// Creamos una cadena con los datos recogidos de github
let datosGit = new String(`{
    "login": "esscri97",
    "id": "132704289",
    "email": "null",
    "public_repos": "9"
  }`);


  // Creamos una clase DatosGitHub
  class DatosGitHub{
    // El constructor recibirá un parametro que en este caso serán los datos de github
    constructor(datos){
        this.datosJSON = JSON.parse(datos); // con JSON.parse() convertimos a objeto la cadena antes creada
        // Asignamos a cada uno de los datos un nombre, en este caso igual que el que tenía, lo conseguimos gracias al objeto creado
        this.login = this.datosJSON.login;
        this.id = this.datosJSON.id;
        this.email = this.datosJSON.email;
        this.public_repos = this.datosJSON.public_repos;
    }

    // Creamos una función que muestre en consola el texto escrito
    datosRecibidos(){
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
    }
  }

  let datosGitHubInstancia = new DatosGitHub(datosGit); // Instanciamos un objeto con los datos de GitHub
  datosGitHubInstancia.datosRecibidos(); //Llamamos a la función datosRecibidos a partir del objeto creado

  datosGitHubInstancia.email = "david97escriva@gmail.com" // Añadimos el campo "email" porque venía como null
  datosGitHubInstancia.datosRecibidos(); //Volvemos a mostrar los datos