const leer = require("prompt-sync")();

function main() {
    const gato1={
        colorOjos: "amarillo",
        edad:3,
        colorPelaje:"negro",
        raza:"Bombay",
        nombre:"Pantera",
        esHuranio:false
    }
    
    console.log(gato1.edad);
    console.log(gato1.esHuranio);  //objeto.propiedad
    gato1.edad=10;
    console.log(gato1.edad);
    delete gato1.esHuranio;
    console.log(gato1.esHuranio);
    gato1.matriz=20;
    console.log(gato1.matriz);
    console.log(gato1);
    
    
    
}
main();