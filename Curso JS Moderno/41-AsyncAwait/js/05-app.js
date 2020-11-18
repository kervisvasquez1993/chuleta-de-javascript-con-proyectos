const url = 'https://picsum.photos/list'

document.addEventListener('DOMContentLoaded', obtenerResultado)
/*
function obtenerResultado()
{
    fetch(url)
         .then(respuesta => respuesta.json())
         .then(resultado => console.log(resultado))
         .catch(error => console.log(error))
}
*/
async function obtenerResultado()
{
    try{
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado)
    }
    catch(error)
    {
        console.log(error)
    }

}