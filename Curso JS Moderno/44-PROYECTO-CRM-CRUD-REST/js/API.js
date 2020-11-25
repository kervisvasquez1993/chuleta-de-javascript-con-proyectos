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

//elimina un cliente
export const eliminarCliente = async clienteId => {
    try{
        await fetch(`${url}/${clienteId}`,{
            method: 'DELETE',

        })
    }
     catch(e)
     {console.log(e)}
}

//obtiene un cliente por su id

export const obtenerClientesEditar = async id => {
    try{
        
        const resultado = await fetch(`${url}/${id}`);
        const cliente   = await resultado.json();
        return(cliente);
    }catch(e)
    {
        console.log(e)
    }
}

// actualiza un registro

export const editarCliente = cliente => {
    try {
        console.log(cliente)
        fetch(`${url}/${cliente.id}`, {
            method  : 'PUT',
            body    :  JSON.stringify(cliente),
            headers :  {
                'Content-Type' : 'application/json'
            }
        })
        window.location.href = 'index.html'
        
    } catch (error) {
        console.log(error)
    }
}
