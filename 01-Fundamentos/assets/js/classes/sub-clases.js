class Persona {
    nombre;
    
         static _conteo = 0;
         static get conteo() {
             return Persona._conteo + ' instancias';
         }
         static mensaje(){
             console.log(this.nombre); //Undefined
             console.log('Hola soy metodo estatico')
         }
        constructor(nombre = 'Sin nombre' , codigo = 'Sin codigo', frase = 'Sin frase') {
    
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
    
            Persona._conteo ++; 
        }
        set setComidaFavorita(comida) {
            this.comida = comida.toUpperCase();
        }
    
        get getComidaFavorita() {
            return`La comida Favorita de ${this.nombre} es ${this.comida}`;
        }
    
        quienSoy(){
            console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
        }
    
        miFrase(){
            this.quienSoy();
            console.log(`${this.codigo} dice ${this.frase}`)
    
        }
    } // Es buena practica usar PascalCase para nombrar clases
    
    class Heroe extends Persona {
        
        clan = 'sin clan';
        constructor( nombre , codigo , frase){
            super(nombre , codigo, frase);
            this.clan = 'Los Avengers'
        }
        quienSoy(){
            console.log(`soy ${this.nombre},${this.clan}`);
            super.quienSoy();
        }

    }
    
    const spiderman = new Heroe( 'Peter Parker' , 'Spiderma', 'Soy tu amigable vecino spiderman');
    
    
console.log(spiderman)
spiderman.quienSoy();