//  Propiedades (variables de los arrghlos) y metoidos (funciones internas de los arreglos)

let juegos = ['Zelda' , 'Mario' , 'Metroid', 'Kirby'];

console.log('Largo: ', juegos.length);

let primero = juegos[ 2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);


juegos.forEach( (elemento, indice, arr ) => { 
    console.log({elemento , indice, arr})
});

let nuevaLongitud =juegos.push('Zerop');
console.log({nuevaLongitud , juegos});

nuevaLongitud =  juegos.unshift ('Marvel')
console.log({nuevaLongitud , juegos});

let juegoBorrado =juegos.pop();
console.log({juegoBorrado,juegos});

let pos = 1;
console.log(juegos)
let juegosBorrados =  juegos.splice(pos , 2);
console.log({juegosBorrados, juegos})

let metrodiIndex = juegos.indexOf('Metroid'); // caseSensitive -1 means que no lo encontro
console.log(metrodiIndex);

// Pasar valores por referencia


