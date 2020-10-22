let txt = document.getElementById('cargarTxt')

txt.addEventListener('click', obtnerDatosTxt)
let titulo = document.querySelector('h1')

function obtnerDatosTxt(){
    const url = 'data/datos.txt'
    fetch(url)
    .then(respuesta => {
        console.log(respuesta)
        console.log(respuesta.status)
        console.log(respuesta.statusText)
        console.log(respuesta.url)
        console.log(respuesta.type)
        return respuesta.text()
    })
    .then(datos => {
        let a = document.createElement('p')
        a.innerHTML = datos
        titulo.appendChild(a)
    })
    .catch(error => {
        console.log(error)
    })

}