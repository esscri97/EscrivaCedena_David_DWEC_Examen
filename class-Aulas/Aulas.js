// Creamos la clase Aula
class Aula{
    constructor(numero, capacidad){ // El constructor tendrá estos dos parámetros
        this.numero = numero; // Damos valor a this.numero
        this.capacidad = capacidad; // Damos valor a this.capacidad
    }

    // creamos la función en la cual se mostrará por consola el texto dado.
    presentarMateriales(){
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);
    }
}


// Cramos la clase Musica la cual hereda de Aula
class Musica extends Aula{
    constructor(numero, capacidad, instrumento){ // El constructor tendrá estos parámetros
        super(numero, capacidad); // con super heredamos los valores de Aula (podemos prescindir del this.numero = numero...)
        this.instrumento = instrumento; // Damos valor a this.instrumento
    }

    // creamos la función presentarMateriales para esta clase, los elementos creados a partir de esta clase tendrán esta función.
    presentarMateriales(){
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas.`);
    }
}


// Cramos la clase Tecnologia la cual hereda de Aula
class Tecnologia extends Aula{
    constructor(numero, capacidad, cantidadOrdenadores){ // El constructor tendrá estos parámetros
        super(numero, capacidad); // con super heredamos los valores de Aula (podemos prescindir del this.numero = numero...)
        this.cantidadOrdenadores = cantidadOrdenadores; // Damos valor a this.cantidadOrdenadores
    }

    // creamos la función presentarMateriales para esta clase, los elementos creados a partir de esta clase tendrán esta función.
    presentarMateriales(){
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprado ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad.`);
    }
}

// creamos un objeto a partir de la clase Aula
let aula1 = new Aula(1, 20);
aula1.presentarMateriales(); // Llamamos a la función presentarMateriales() de su clase

// creamos un objeto a partir de la clase Musica
let aula2 = new Musica(2, 10, "saxofón");
aula2.presentarMateriales(); // Llamamos a la función presentarMateriales() de su clase. evidenciamos polimorfismo

// creamos un objeto a partir de la clase Tecnologia
let aula3 = new Tecnologia(3, 30, 20);
aula3.presentarMateriales(); // Llamamos a la función presentarMateriales() de su clase, volvemos a evidenciar polimorfismo
 
console.log("La característica que permite sobreescribir los métodos se llama POLIMORFISMO");