const url = 'http://localhost:4001/clientes'
export const nuevoCliente = async cliente => {
    // cuando se crea un nuevo cliente
    try{
       await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    }
    catch(e)
    {
        console.log(e)
    }
}

//obtiene todos los clientes
export  const obtenerClientes = async () => {
    try{
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    }
    catch(e)
    {
        console.log(e)
    }
}