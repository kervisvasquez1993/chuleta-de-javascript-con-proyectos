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
    console.log(typeof(numero))
    // conectar con ajax 
    
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
     xhr.onload = function()
     {
         if(this.status === 200)
         {
             const nombres = JSON.parse(this.responseText)
             let htmlNombre = '<h2> Nombres Generados </h2>'
             
             htmlNombre += '<ul class="lista">'
                nombres.forEach(function(nombre){
                      `
                        <li> nombre : ${nombre.name}</li>
                      `            
                });
             htmlNombre += '</ul>'
             document.getElementById('resultado').innerHTML = htmlNombre
             console.log(htmlNombre)
         }
     }
    xhr.send()
}

