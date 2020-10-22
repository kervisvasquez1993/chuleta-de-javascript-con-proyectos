let jsonArr = document.getElementById('cargarJSONArray')
jsonArr.addEventListener('click', obtenerDatosArr)

function obtenerDatosArr(){
    const url2 = 'data/empleados.json'
    fetch(url2)
    .then(respuesta => respuesta.json())
    .then(resultado => mostarHTML2(resultado))
}

function mostarHTML2(empleados)
{   
    let contenido = document.querySelector('.contenido')
    let html = ''
    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado
        html = `
        
        <p>Empleado : ${empresa} </p>
        <p>ID       : ${id} </p>
        <p>Nombre   : ${nombre} </p>
        <p>Trabajo  : ${trabajo} </p>
        `

        contenido.innerHTML += html
    });
}