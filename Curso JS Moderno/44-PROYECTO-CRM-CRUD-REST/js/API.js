const url = 'http://localhost:4001/clientes'
export const nuevoCliente = async cliente => {
    
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