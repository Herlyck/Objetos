const leer = require("prompt-sync")();

function main() {
    const mascota = {
        nombre:"pelusa",
        raza:"breton",
        color:"blanco y marron"

    };

    delete mascota.raza;
    console.log(mascota);
}
main();