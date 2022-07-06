

// const jokeURL = 'https://api.chucknorris.io/jokes/random';

// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";
// import { obtenerUsuarios } from "./js/http-provider";

// import { obtenerChiste } from "./js/http-provider";


// fetch (jokeURL).then( resp => {
//     resp.json().then( ({id , value }) => {
//         console.log(id);
//         console.log(value);
//     })
// })

//Podemos encadenar tantas promesas como sea necesario si regresa una promesa


// fetch(jokeURL)
//     .then(resp => resp.json())
//     .then(({id, value}) => {
//         console.log(id,value);
//     })

// obtenerChiste().then(console.log)

// init();
// obtenerUsuarios().then(console.log);



import { init } from './js/archivos-page';
// import * as CRUD from './js/crud-provider';




// CRUD.getUsuario( 1 ).then(console.log);
// CRUD.getUsuario( 1 ).then(console.log);

// CRUD.createUser2({
//     name: 'Juan',
//     job: 'Software Developer'
// }).then(console.log);

// CRUD.actualizarUsuario(1, {
//     name: 'David',
//     job: ' Senior Software Developer'
// }).then(console.log);

// CRUD.borrarUsuario(1).then(console.log)



// CRUD.getUser(1).then(console.log);

// CRUD.createUser({
//     name: 'David',
//     job: 'Software Developer'
// }).then(console.log); 

// CRUD.removeUser(1).then(console.log);

// CRUD.updateUser(1 ,{
//     name: 'David',
//     job: 'Senior Software Developer'
// }).then(console.log)

init();