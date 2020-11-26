// se ejecuta correctamente
obtenerCliente('juan')
function obtenerCliente(nombre)
{
    console.log(`El nombre del cliente es ${nombre}`)
}
// se ejecuta correctamente
//obtenerCliente('juan')



//no se ejecuta porque no esta inicializado la funcion
//obtenerCliente2('antonio')
const obtenerCliente2 = function(nombre)
{
    console.log(`El nombre del cliente es ${nombre}`)
}
//funciones
obtenerCliente2('antonio')

//ejemplo se lo que sucede con el function declaration

/*

//obtenerCliente2('antonio');
obtenerCliente2;

const obtenerCliente2 = function(nombre);
{
    console.log(`El nombre del cliente es ${nombre}`);
}

*/