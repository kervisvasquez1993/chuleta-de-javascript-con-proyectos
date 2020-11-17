function descargarNuevosClientes()
{
    return new Promise ( resolve => {
        console.log('descargando cliente ...')

        setTimeout( ()=> {
            resolve('los clientes fueron descargados')
        }, 3000)
    })
}

function descargarNuevosPedidos()
{
    return new Promise ( resolve => {
        console.log('descargando pedidos ...')

        setTimeout( ()=> {
            resolve('los pedidos fueron descargados')
        }, 1500)
    })
}
const app = async () => {

    try{
        const cliente = await descargarNuevosClientes()
        console.log(cliente)
    }catch(err)
    {
        console.log(err)
    }
}
app()