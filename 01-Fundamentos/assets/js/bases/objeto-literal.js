const personaje = {    //Llave : Valor de la llave
    nombre  : 'Tony Stark',
    codeName : 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I' , 'Mark V' , 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-Pelicula' : 'Infiniy War'
};

console.log(personaje);
console.log(personaje['nombre']);
console.log(personaje.edad);
console.log(personaje.coords.lat);
console.log('Numero de Trajes : ' + personaje.trajes.length);
console.log('Ultimo de traje : ' + personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);
console.log('Ultima Pelicula' , personaje["ultima-Pelicula"]);

// Mas Detalles

// personaje.edad = null;
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje);
console.log(entriesPares);

// personaje = true; 

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 654654654654;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);
// freeze congela las asignaciones a las propiedades del objeto pero aun asi se pueden cambier las propiedades que tienen objetos o arreglos adentro de ellos.

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades , valores);

