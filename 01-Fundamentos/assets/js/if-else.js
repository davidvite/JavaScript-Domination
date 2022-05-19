let a = 9;

if(a >= 10 ){
    console.log('A es mayor o igual a 10');

}else{
    console.log('A es menor a 10')
}
console.log('Fin de programa');



const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo
console.log({dia})

if(dia === 0){
    console.log('Domingo');
} else {
    console.log('No es domingo')
}

// == dia es igual al valor uno pero no me importa el tipo