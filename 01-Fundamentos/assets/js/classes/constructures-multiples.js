
class Persona {

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getinfo() {
        console.log(`info : ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';


const david = {
    nombre : 'David',
    apellido : 'Vite',
    pais : 'MX'

}


const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(david);

persona1.getinfo();
persona2.getinfo();