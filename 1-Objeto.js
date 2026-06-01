const leer = require("prompt-sync")();

function main() {
    const personaje = {
        nombre:"Raul",
        especie:"Pez",
        hp:1000,
        mp:1500,
        Habilidad:"Nadar",
        Fortaleza:"vs Fuego",
        Debilidad:"vs Tierra"
}

    console.log(personaje.nombre);
    console.log(personaje.mp);
    console.log(personaje.Debilidad);

    
}

main();