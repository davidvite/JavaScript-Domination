// function crearPersona(nombre, apellido){
//     return{
//         nombre, apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona =  crearPersona('David', 'Vite');
console.log(persona)

function imprimeArgumentos(){
    console.log(arguments);
}
const imprimeArgumentos2 = (edad, ...args) =>{
    // console.log(args);
    return args;
}
//LAs funciones tradicionales contienen los argumentos pero las de fechas solo pasa el primer argumentos para eso se usa desestructuracion esto trrae algunas concecuencias com el echo de que no se pueden poner nada despues del parametro no puede venir ningun otro argumento y la otra condicion es que no se puede extraer 

const [casado , vivo, nombre, saludo] = imprimeArgumentos2(10 , true, false, 'David', 'Hola');
console.log({casado , vivo, nombre, saludo})


const {apellido: nuevoApellido} =  crearPersona('David', 'Vite');
console.log({nuevoApellido})


// destructuracion de argumentos

const tony = {    //Llave : Valor de la llave
    nombre  : 'Tony Stark',
    codeName : 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I' , 'Mark V' , 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimePropiedades(tony);