function descargarNuevosClientes()
{
    return new Promise ( resolve => {
        console.log('descargando cliente ...')

        setTimeout( ()=> {
            resolve('los clientes fueron descargados')
        }, 5000)
    })
}

function descargarNuevosPedidos()
{
    return new Promise ( resolve => {
        console.log('descargando pedidos ...')

        setTimeout( ()=> {
            resolve('los pedidos fueron descargados')
        }, 2000)
    })
}
const app = async () => {

    try{
        /*const cliente = await descargarNuevosClientes()
        console.log(cliente)

        const pedido = await descargarNuevosPedidos()
        console.log(pedido)
        */
       const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()])

       console.log(respuesta[0])
       console.log(respuesta[1])
    }catch(err)
    {
        console.log(err)
    }
}
app()