let cargarJson = document.getElementById('cargarJSON')
cargarJson.addEventListener('click', cargarJsonFunction)

function cargarJsonFunction()
{
    const urlJson = 'data/empleado.json'
    fetch(urlJson)
    .then( respuesta =>  respuesta.json()
    )
    .then(resultado =>  mostarHTML(resultado))
}

function mostarHTML({ empresa, id, nombre, trabajo})
{
    const contenido = document.querySelector('.contenido')

    contenido.innerHTML = `
    
        <p>Empleado : ${empresa} </p>
        <p>ID       : ${id} </p>
        <p>Nombre   : ${nombre} </p>
        <p>Trabajo  : ${trabajo} </p>
    `
}