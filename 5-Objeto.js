const leer = require("prompt-sync")();

const VALOR="A";
const VALOR2="B";
const VALOR3="C";

function main() {
    
    const objeto = {
        letra:VALOR,
        letra2:VALOR2,
        letra3:VALOR3       

    };
    


    [objeto.letra,objeto.letra3]=[objeto.letra3,objeto.letra];
    console.log(objeto);
}
main();

  
  

 

