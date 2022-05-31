class Persona {
nombre;//En la inicializacion de propiedades no podemos usar , para iniciar muchas por eso usamos ; 

     static _conteo = 0;
     static get conteo() {
         return Persona._conteo + ' instancias';
     }
     static mensaje(){
         console.log(this.nombre); //Undefined
         console.log('Hola soy metodo estatico')
     }
    constructor(nombre , codigo, frase) { //Metodo que se va a ejecutar exactamente al momento de crear una nueva instancia de Persona

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++; 
    }// El constructor es el unico obnjeto que no regresa undefined y siempre va a regresar la instancia del objeto
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return`La comida Favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        this.quienSoy();
        console.log(`soy ${this.codigo} dice ${this.frase}`)

    }
} // Es buena practica usar PascalCase para nombrar clases


const spiderman = new Persona('Peter Parker', 'Spider', 'Soy ty amigable vecino Spiderman');
const ironman   = new Persona('Tonny Stark', 'Ironman', 'I am Tonny Stark');



spiderman.miFrase();
spiderman.setComidaFavorita = 'El pay de cereza de la tia may';
spiderman.nemesis ='Duende Verde' // No hacer esto por que no va a estar en todas las instancias de personajes solo en Spiderman


console.log(spiderman.getComidaFavorita);
console.log(spiderman);
// Persona._conteo = 2;

console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna ='Hola Mundo';

console.log(Persona)
console.log(Persona.propiedadExterna);

