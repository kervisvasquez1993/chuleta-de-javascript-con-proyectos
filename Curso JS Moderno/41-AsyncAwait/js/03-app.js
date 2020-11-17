function descargar()
{
    return new Promise((resolve, reject)=> {
        const error = true
        setTimeout(() =>
        {
            if(!error)
            {
                resolve('el listado de cliente se descargo correctamente')
            }
            else
            {
                reject('Error en la conexion')
            }
        }, 3000 )
    })
}

const ejecutar = async () => 
{
    try{
       const respuesta = await descargar()
       console.log(2+2)
       console.log(respuesta)
    }
    catch(error)
    {
        console.log(error)
    }
}
ejecutar()