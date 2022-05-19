// por valor
let a = 10;
let b = a;
a = 30 ;
console.log({a , b})

// Por referencia

let juan = { nombre : 'Juan'};
let ana = { ...juan};
ana.nombre = 'Ana';

console.log({juan , ana});

// En JS jtodos los objetos son pasados por referencia

// TODOS LOS  PRIMITIVOS SON PASADOS POR VALOR
// TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
// EN JAVASCRIIPT TODO ES OBJETOS EXECEPPTRUANDO LOS PRIMITIVOS

const cambiaNombre = ({...persona}) => {
    persona.nombre  = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log({peter, tony})

// rest argument and spread  is not the same 

//Arreglos
const frutas = ['Manzana' , 'Pera' , 'Pina'];

console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas1 = [...frutas];
console.timeEnd('Spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});