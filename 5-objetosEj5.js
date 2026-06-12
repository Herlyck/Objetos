const leer = require("prompt-sync")();
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const SIN_TERMINAR = "sin terminar";
const TERMINADO = "Terminado";

function main() {
    let tareas = [
        [{ tarea: "lavar ropa", fecha: "02/03/2025", estado: SIN_TERMINAR }, { tarea: "jugar con mascota", fecha: "02/03/2025", estado: SIN_TERMINAR }], //0
        [],//1
        [{ tarea: "Ordenar Cuarto", fecha: "02/03/2025", estado: SIN_TERMINAR }, { tarea: "Hacer Ejercicio", fecha: "02/03/2025", estado: SIN_TERMINAR }],//2
        [],
        [],
        [],
        []
    ];

    let opcion = 0;
    let elegirTarea = 0;
    let propiedadActualizar = 0;
    let confirmacionActualizar = 0;
    let item = 0;

    console.log("***Mostrando tareas de todos los días de la semana***");


    for (let i = 0; i < tareas.length; i++) {

        if (tareas[i].length > 0) {
            console.log("    - " + DIAS[i] + ":");

            
            for (let j = 0; j < tareas[i].length; j++) {
                item = tareas[i][j]; 

                console.log("        " + (j + 1) + ". " + item.tarea);
                console.log("            - fechaInicio: " + item.fecha);
                console.log("            - " + item.estado);
            }
        }

    }
}

main();