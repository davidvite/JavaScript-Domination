//Tradicional 
function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2];
    console.log('Soy un codigo que esta despues del return');
}

//Anonima
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

//Flecha -- los parentesis en los argumentos en las funciones de flecha no son necesarios
const saludarFlecha = () => {
    console.log('Hola Flecha ');
}
const saludarFlecha2 = ( nombre) => {
    console.log('Hola Flecha ' +  nombre);
}

const retornoDeSaludar =saludar('David', 40 , true, 'Mexico');
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
// saludar2('David');
// saludarFlecha('David');
// saludarFlecha2('David');

// si la funcion no tiene return explicito regresa undifined
// En funcitones nada va a ser ejecutado despues del return. 


function sumar (a , b){
    return a + b;
}

function getRandom(){
    return Math.random();
}

const getRandom2 = () => Math.random();

const sumar2 = (a,b) => { return a + b;}
const sumar3 = (a,b) => a + b;


console.log(sumar (1,2));
console.log(sumar2 (1,2));
console.log(sumar3 (1,2));
console.log(getRandom());
console.log( getRandom2() );