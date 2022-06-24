import './styles.css';
import {promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync}  from "./js/promesas";
import {heroeIfAwait, heroesCiclo, obtenerHeroesArr, obtenerHeroesArrAwait} from "./js/await";
import { createHtmlTagObject } from 'html-webpack-plugin';

// promesaLenta.then(console.log);
// promesaMedia.then(mensaje => console.log(mensaje));
// promesaRapida.then(console.log);


/**
 * * Promise Race nos permite ejecutar todas las promesas y obtener el mensaje de la promesa que se resuleva mas rapido
  */

/* 
* Aqui vemos como funciona el race
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.warn); */



/** 
** Comparando la diferencia de como usar un promise normal y uno usando Async

buscarHeroe('capi2').then(heroe => console.log(heroe)).catch(console.warn)


buscarHeroeAsync('iron2').then(heroe => console.log(heroe))
.catch((err) => {
    console.warn(err)
})
 */




/**
 * * Usando el await 

console.time('await');

obtenerHeroesArrAwait('capi1')
.then( heroe => {
    console.log(heroe);
    console.timeEnd('await')
}).catch(console.warn)   

 */


heroesCiclo();
heroeIfAwait('iron')