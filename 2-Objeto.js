const leer = require("prompt-sync")();

function main() {
    const conejo = {
        nombre:"canelita",
        edad:"cinco",
        raza:"arlequin"
        
}

const paquete ={
    cantidad:10,
    restantes:2,
    entregados:8
}

const dia = {
    amanecer:true,
    atardecer:false,
    anochecer:false
}

    console.log(conejo.edad);
    console.log(paquete.restantes);
    console.log(dia.atardecer);


    
}

main();