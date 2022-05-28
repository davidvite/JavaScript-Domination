class Persona {
    nombre;//En la inicializacion de propiedades no podemos usar , para iniciar muchas por eso usamos ; 
    codigo;
    frase;

    constructor(nombre , codigo, frase) { //Metodo que se va a ejecutar exactamente al momento de crear una nueva instancia de Persona

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }// El constructor es el unico obnjeto que no regresa undefined y siempre va a regresar la instancia del objeto

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
console.log(spiderman , ironman);

spiderman.quienSoy();
spiderman.miFrase();
ironman.quienSoy();