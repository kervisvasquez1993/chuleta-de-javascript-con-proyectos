async function obtenerClientes()
{
    const clientes = new Promise((resolve, reject)=>
    {
            setTimeout(function()
            {
                resolve(`clientes descargados.`)
            },2000)
    })
    const error = false
    if(!error)
    {
        const respuesta = await clientes
        return respuesta
    }
    else
    {
        await Promise.reject(`hubo un error`)
    }

}

obtenerClientes().then(function(respuesta)
{
    console.log(respuesta)
}).catch(error => console.log(error))

function saludar()
{
    return 'hola desde js'
}
console.log(saludar())