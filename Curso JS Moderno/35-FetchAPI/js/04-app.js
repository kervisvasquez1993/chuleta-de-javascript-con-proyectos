const cargarApiBtn = document.querySelector('#cargarAPI')
cargarApiBtn.addEventListener('click', obtenerDatos)
function obtenerDatos()
{
    const url = 'https://picsum.photos/list'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostarHTML(resultado))
}

function mostarHTML(datos){
    const contenido = document.querySelector('.contenido')
    let html = ''
    datos.forEach(dato => {
        const {author, post_url } = dato
        html += `
        
        <p>Autor = ${author}</p>
        <a href="${post_url}"> Post del Autor </a>
        `
    });
    contenido.innerHTML = html
}