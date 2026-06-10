const leer = require("prompt-sync")();

function main() {
    const leer = require("prompt-sync")();
    const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const SIN_TERMINAR = "sin terminar";
    const TERMINADO = "Terminado";
   

        let tareas = [
            [{ tarea: "lavar ropa", fecha: "02/03/2025", estado: SIN_TERMINAR}, {tarea: "jugar con mascota", fecha: "02/03/2025", estado: SIN_TERMINAR }], //0
            [],
            [{ tarea: "ordenar cuarto",fecha: "02/03/2025", estado: SIN_TERMINAR}, {tarea: "hacer ejercicio",fecha: "02/03/2025", estado: SIN_TERMINAR}],
            [],
            [],
            []
        ];
        
        let opcion = 0;
        let elegirTarea=0;
         let propiedadEliminar = 0;
        let tareasEliminar = 0;
        let nuevasTareas = {};

        console.log("seleccione un dia 0-6");
        opcion= Number(leer());

        console.log("mostrando tareas del dia:",DIAS[opcion])
        console.log("1-",tareas[opcion][0].tarea);
        console.log("2-",tareas[opcion][1].tarea);

        console.log("seleccione una tarea:")
        elegirTarea=Number(leer())-1;

        console.log("propiedades en ",tareas[opcion][elegirTarea].tarea, tareas[opcion][elegirTarea]);

        console.log("que propiedad deseas eliminar?");
        propiedadEliminar = leer();

        delete tareas[opcion][elegirTarea][propiedadEliminar];
        console.log(tareas);
        

}
main();



