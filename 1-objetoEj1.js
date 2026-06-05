const leer = require("prompt-sync")();
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const TAREAS = ["lavar ropa", "cocinar", "limpiar casa", "planchar", "Programar", "Barrer", "acomodar"];
const SIN_TERMINAR="sin terminar";
const TERMINADO= "Terminado";
function main() {
    let matriz = [
        [{ tarea: "lavar ropa", fecha: "02/03/2025",estado:SIN_TERMINAR }], //0
        [{ tarea: "cocinar", fecha: "16/02/2026",estado:TERMINADO }],//1
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    let dia = 0;




    console.log("seleccione dia 0-6");
    dia = Number(leer());
    console.log(DIAS[dia]);


    // for (let i = 0; i <1 ; i++) {
    //     matriz.push([{}]);   => [ {objeto:"casa" } ]
    //     for (j = 0; j < 6; j++){
    //        
    //         matriz[dia][0].tarea;
    //         matriz[dia][0].fecha;
    //         matriz[dia][0].estado;
    
    //     }

    // }
    // console.log(tarea.tarea);
    // console.log(tarea.fecha);

    console.log(matriz[dia][0].tarea);
    console.log(matriz[dia][0].fecha);
    console.log(matriz[dia][0].estado);
    

}
main();

