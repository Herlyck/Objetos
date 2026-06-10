const leer = require("prompt-sync")();
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const TAREAS = ["lavar ropa", "cocinar", "limpiar casa", "planchar", "Programar", "Barrer", "acomodar"];
const SIN_TERMINAR = "sin terminar";
const TERMINADO = "Terminado";
function main() {

    let matriz = [
    [{ tarea: "lavar ropa", fecha: "02/03/2025", estado: SIN_TERMINAR }], //0
        [{ tarea: "cocinar", fecha: "16/02/2026", estado: TERMINADO }],//1
        [],
        [],
        [],
        [],
        []
    ];

    let opcion = 0;
    let nuevaTarea = 0;
    let cantTareas = 0;
    let nuevasTareas={};

    console.log("cantidad de tareas:");
    cantTareas = Number(leer());

    for (let i = 0; i < cantTareas; i++) {
        console.log("seleccione dia 0-6");
        opcion = Number(leer());
        console.log(DIAS[opcion]);

        console.log("agregue nueva tarea:")
        nuevaTarea = leer(); 

        nuevasTareas = {
            tarea: nuevaTarea,
            fecha: "10/06/2026", 
            estado: SIN_TERMINAR
        };
        matriz[opcion].push(nuevasTareas);
        
    }
    console.log(matriz);
    // console.log(matriz[opcion][0].fecha)


}
main();
















    