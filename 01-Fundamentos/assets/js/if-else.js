let a = 9;

if (a >= 10) {
    console.log('A es mayor o igual a 10');

} else {
    console.log('A es menor a 10')
}
console.log('Fin de programa');



const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo
console.log({ dia })

if (dia === 0) {
    console.log('Domingo');
} else {
    console.log('No es domingo')
}

// == dia es igual al valor uno pero no me importa el tipo

dia = 6;

const diaLetras = {

    0: ()=> 'domingo - 0', 
    1: ()=> 'lunes - 1',
    2: ()=> 'martes - 2',
    3: ()=> 'miercole - 3',
    4: ()=> 'jueves - 4',
    5: ()=> 'viernes - 5',
    6: ()=> 'sabado - 6',

}

const diaLetras2 = [ 'domingo - 0',  'lunes - 1', 'martes - 2', 'miercole - 3', 'jueves - 4', 'viernes - 5', 'sabado - 6']


console.log(diaLetras[dia]() || 'Dia no definido');
console.log(diaLetras2[dia] || 'Dia no definido');
