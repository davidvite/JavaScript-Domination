const regresaTrue = () => {
    console.log('Regresa True')
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!regresaFalse());

console.warn('AND');// true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //false

console.log('======');
console.log( regresaFalse() && regresaTrue() ); // en este caso Js ejecuta la primera condicion en el lado izquierdo y como ya regreso falso no va a ejecutar la segunda funcion* pero si lo colocamos al rever lo va a ejecutar;
console.log('==&&==');
console.log( regresaTrue() && regresaFalse() );

console.warn('OR'); // true
console.log(true || false );
console.log(false || false);

console.log( regresaTrue() || regresaFalse() ); // Lo mismo que arriva pero si regresa un true no va a ejecutar lo siguiente


console.warn('Asignacions');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1= true && 'Hola Mundo' && 150; // de  iZquierda a derecha se ejecuta 150 
const a2= false && 'Hola Mundo' && 150; //  false
const a3= 'Hola' && 'Mundo' && soyFalse && true; // Falso por que no todas las asignaciones son true
const a4= soyFalse || 'Ya no soy falso';
const a5= soyFalse || soyUndefined || soyNull || 'Ya nos soy falso de nuevo'; // Ninguno de los primeros 3 tiene valor por eso toma el valor del string
const a6= soyFalse || regresaTrue() || soyNull || 'Ya nos soy falso de nuevo'; // como el segundo valor es true no se siguen ejecutando las siguientes asignaciones

console.log({a1 , a2, a3, a4, a5, a6}) ; 



if (true || true || true || false){ // nmo deberia de haber mas de 3 condiciones
    console.log('Hacer algo');
}else {
    console.log('Hacer otra cosa')
}