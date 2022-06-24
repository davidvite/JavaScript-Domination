const heroes = {
    capi: {
        nombre: "Capitan America",
        poder: "Aguantar inyecciones sin morir"
    },
    iron: {
        nombre: "Ironman",
        poder: "Mucho dinero"
    },
    spider: {
        nombre: "SpiderMan",
        poder: "Alergia buena a las arañas"
    },
}


/* Forma sin el ASync */
export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => {
                resolve(heroe);
            }, 1000);

        } else {
            reject(`No existe heroe con Id ${id}`);
        }
    });

}

/* Forma con el Async */
/* 
Cuando vemos la palabra asycn por defecto estamos regresando una nueva promesa pero el Asyn resume por nosotros */

export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        /* Dos maneras de manejar el error  */
        throw `No existe heroe con Id ${id}`;/* Tradicional si sabemos que esta dando el error*/
        /* throw Error (`No existe heroe con Id ${id})`; 
        * * Esta manera es si es un error inesperado */
    };

}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
};