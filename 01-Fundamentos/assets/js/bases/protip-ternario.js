

const elMayor = (a , b) =>  (a > b) ? a : b ; // Aunque los parentesis en el operadore ternario no son requeridos es buena practica agregarlos
const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares'


console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr Stange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(), //funcion anonima autoinvocada\
    elMayor(10,14),

];

console.log(amigosArr);

const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B+' :
              nota >= 75 ? 'B+' :
              nota >= 70 ? 'B+' : 'F'

console.log({nota , grado});