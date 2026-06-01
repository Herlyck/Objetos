const leer = require("prompt-sync")();

function main() {
    const objeto={
        nombre:"Milo",
        edad:7,
        esPerro:false,
        color:"blanco",
        vuela:"no",
        patas:4,
        esgato:true

    }
    objeto.nombre="lalo";
    objeto.color="rojo";
    objeto.esgato=false;

    console.log(objeto.nombre);
    console.log(objeto.color);
    console.log(objeto.esgato);
    
}
main();