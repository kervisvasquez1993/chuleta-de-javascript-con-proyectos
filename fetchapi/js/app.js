document.getElementById('txtBtn').addEventListener('click', cargarTxt)
document.getElementById('jsonBtn').addEventListener('click', cargarJson)
document.getElementById('apiBTN').addEventListener('click', cargarRest)
function cargarTxt()
{
    fetch('datos.txt').then(function(respuesta)
    {
        return (respuesta.text())// como quieres que te devuelva los datos
    }).then(function(data){
        // console.log(data) // traer o mostrar informacion 
        document.getElementById('resultado').innerHTML = data
    })
    .catch(function(error){
        console.log(error)
    })
   
}


function cargarJson()
{
    fetch('empleados.json')
    .then(function(respuestaDatos){
        return (respuestaDatos.json())
    })
    .then(function(pintarJson){
        let html = "<ul>"
        pintarJson.forEach(function(dato){
            html += 
            `
                <li> nombre : ${dato.nombre} y su puesto : ${dato.puesto}</li>
                
            `
        })

        html += "</ul>"
        document.getElementById('resultado').innerHTML = html
    })
    .catch(function(error){
        document.getElementById('resultado').innerHTML = error
    })
}

function cargarRest(){
    fetch('https://picsum.photos/list')
    .then(function(respuesta)
    {
        return (respuesta.json())
    })
    .then(function(mostrar)
    {
        let html = ""
        mostrar.forEach(function(imagen){
            html += 
            `
                <li>
                    <a href="${imagen.post_url}"> ver imagen</a>
                    <p> autor: ${imagen.author}</p>
                </li>
            `
        })
        html += "</ul>"
        document.getElementById('resultado').innerHTML = html
    })
}