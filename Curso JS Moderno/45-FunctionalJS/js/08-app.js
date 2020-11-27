/* const cliente = 'Juan'

function mostrarCliente()
{
    const cliente = 'Pablo'
    console.log(cliente)
}
mostrarCliente();  */

const obtenerCliente = () => {
    const nombre = "kervis"
    function muestraNombre()
    {
        console.log(nombre)
    }
    return muestraNombre;

}

const cliente = obtenerCliente()

cliente();

// es una fomma acceder a una funciono valor desde el exterior