//Require
//const fs = require('fs');

//const fs = require('express');
//const fs = require('./fs');

/*let data = "";

for (let i = 1; i <= 10; i++) {

    data += `${base} * ${i} = ${ base * i } \n`;

}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt ha sido creado`);

});*/

const argv = require("./config/yargs").argv;

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case "crear":
        //Se crea el archivo
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}





// let argv2 = process.argv;
// console.log(argv)
// console.log("limite", argv.limite);
/*console.log(argv2);*/
// let parametro = argv[2];
// let base = parametro.split("=")[1];