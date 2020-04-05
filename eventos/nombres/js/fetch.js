document.querySelector('#generar-nombre').addEventListener('submit', cargarAjax)
function cargarAjax(e)
{
    e.preventDefault()
    // leer las variables
    const origen = document.getElementById('origen')
    const seleccionado = origen.options[origen.selectedIndex].value
    const genero = document.getElementById('genero')
    const generoSeleccionado = genero.options[genero.selectedIndex].value
    const numero = document.getElementById('numero').value
    let url = ''
    url +=  'http://uinames.com/api/'
    if(seleccionado !== ''){
        url += `?region=${seleccionado}&`
    }
    if(generoSeleccionado !== ''){
        url += `?gender=${generoSeleccionado}&`
    }
    if(numero  !== ''){
        url += `?amount=${numero}&`
    }

    // crear conexion a fetch

    fetch(url)
    .then(function(peticion)
    {
        return peticion.json
    })
    .then(function(data)
    {
      console.log(data)  
    })
    .catch(function(error)
    {
        console.log(error)
    })

}