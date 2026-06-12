const leer = require("prompt-sync")();
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const SIN_TERMINAR = "sin terminar";
const TERMINADO = "Terminado";
function main() {
    let tareas = [
        [{ tarea: "lavar ropa", fecha: "02/03/2025", estado: SIN_TERMINAR }, { tarea: "jugar con mascota", fecha: "02/03/2025", estado: SIN_TERMINAR }], //0
        [],//1
        [{ tarea: "Ordenar Cuarto", fecha: "02/03/2025", estado: SIN_TERMINAR }, { tarea: "Hacer Ejercicio", fecha: "02/03/2025", estado: SIN_TERMINAR }],//2
        [],//3
        [],//4
        [],//5
        []//6

    ];


    let opcion = 0;
    let elegirTarea = 0;
    let propiedadActualizar = 0;
    let confirmacionActualizar=0;


    console.log("seleccione un dia 0-6");
    opcion = Number(leer());

    console.log("mostrando tareas del dia:", DIAS[opcion])
    console.log("1-", tareas[opcion][0].tarea);
    console.log("2-", tareas[opcion][1].tarea);

    console.log("seleccione una tarea:")
    elegirTarea = Number(leer()) - 1;

    console.log("propiedades en ", tareas[opcion][elegirTarea].tarea, tareas[opcion][elegirTarea]);

    console.log("desea actualizar? s/n");
    confirmacionActualizar=leer().toLowerCase();

    if (confirmacionActualizar === "s" ){
        console.log("propiedad a Actualizar:");
        propiedadActualizar=leer();
         tareas[opcion][elegirTarea][propiedadActualizar]=TERMINADO;

        
    }

    console.log(tareas);
    
    








}
main();
