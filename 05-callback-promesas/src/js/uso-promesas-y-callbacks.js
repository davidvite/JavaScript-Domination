/**
 * * Para poder usar este archivo tiene que ser movido como index.js y ejecutarlo desde ahi
  */


import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import {buscarHeroe} from './js/promesas'

const heroeId1 =  'capi';
const heroeId2 =  'spider';
/** 
* myMethod
* * Important information is hightligthed
* ! Deprecated method, do not use
* ? Should this method be exposed in the public API?
* TODO: refactor this method so that it comforms to the API
* @param myParam The parametere for this methos 
 */

/**
* ! This code block is to illustrate the callback functionallity from the callback js file
buscarHeroeCallback(heroeId1, (err,heroe1) => {
    if (err) { return    console.log(err);}
    buscarHeroeCallback(heroeId2, (err, heroe2)  => {    
        })
    });
    
    console.log('Fin del programa con callbacks');
*/


/**
*!This code block is to illustrate how to invoke a promise fro promesas file
buscarHeroe(heroeId1).then((heroe1) => {
        buscarHeroe(heroeId2).then((heroe2) => {
            // console.log(`Enviando heroe ${heroe.nombre} a la mision`);
                console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
        })
}); */


/**
 * * con .all tadas las promesas tienen que ser resuletas, de otra manera no ejecuta las otras cosas dentro del then. 
 */
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
    .then(([heroe1,heroe2]) =>{
        console.log(`Enviando ${heroe1.nombre} y ${heroe2.nombre}`);
    }).catch(err =>{
        alert(err);
    }).finally( ( ) => {
        console.log('Se termino el promise.all');
    })