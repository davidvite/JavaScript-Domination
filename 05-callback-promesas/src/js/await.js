import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async () => {

    /*  Una forma no tan elegante de usar el await

        const heroesArr = [];
        for(const id of heroesIds){
            heroesArr.push(buscarHeroe(id));
        }
    return await Promise.all(heroesArr); */

    return await Promise.all(heroesIds.map(buscarHeroe));
}

export const obtenerHeroesArrAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('CATCH!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }

    }


}


/* For Await */
export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    for await (const heroe of heroesPromesas) {
        console.log(heroe)
    }
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    console.timeEnd('HeroesCiclo');
}


export const heroeIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaaa');
    }
}