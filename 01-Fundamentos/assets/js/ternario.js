
// Dias de la semana avrimos a las 11,
// Los fines de semana abrimos a las 9

const dia = 0;
const horaActual = 12;

let horaApertura;
let mensaje;// Esta abierto o esta cerrado, hoy abrimos a las XX;

// if(dia === 0 || dia ===6 ){
//     if([0,6].includes(dia)){
//     console.log('Fin de semana')
//     horaApertura = 9;
// } else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes( dia) ) ? 9  : 11;

// if(horaActual >= horaApertura){
//     mensaje ='Esta abierto';
// }else{
//     mensaje = `Esta Cerrado, hoy abrimos a las  ${ horaApertura}` ;
// }

mensaje = ( horaActual  >= horaApertura) ? `Esta abierto` : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({horaApertura , mensaje});