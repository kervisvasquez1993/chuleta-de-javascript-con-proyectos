const  resultado = document.querySelector('#resultado')
const  formulario = document.querySelector('#formulario')
const registroPorPagina = 40

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario)

}

function validarFormulario(e){
    
    e.preventDefault()
    const terminoBusqueda = document.querySelector('#termino').value
    if(terminoBusqueda === '')
    {
        mostrarAlerta('Agrega Un termino de busqueda')
        return
    }

    buscarImagenes(terminoBusqueda)
}

function mostrarAlerta(mensaje)
{
    const existeAlerta = document.querySelector('.bg-red-100')
    if(!existeAlerta)
    {
        const alerta = document.createElement('p')
        alerta.classList.add('bg-red-100','border-red-400', 'text-red-700', 'px-4', 'rounded', 'max-w-lg', 'mx-auto','mx-auto', 'mt-6', 'text-center' )
        alerta.innerHTML = `
        <strong class="font-bold"> ERROR!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `
        
        formulario.appendChild(alerta)
        setTimeout(()=> {
            alerta.remove();
        }, 2000)
    }
   
  
}
function buscarImagenes(termino)
{
    const key = '19011453-c226cce3d8d0a43ea044cba31',
          url =`https://pixabay.com/api/?key=${key}&q=${termino}&per_page=40`

          fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => {
              console.log(resultado)
              const totalPagina = calcularPagina(resultado.totalHits)
              console.log(totalPagina)
              mostraImagenes(resultado.hits)
          })
          
}

function calcularPagina(total)
{
    return parseInt(Math.ceil(total/ registroPorPagina))
}
function mostraImagenes(imagenes)
{
    console.log(imagenes)
    while(resultado.firstChild)
    {
        resultado.removeChild(resultado.firstChild)
    }
    /// iterar sobre el arreglo de imagenes y construir el html
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen
        
        resultado.innerHTML += `
        <div class="w-1/2 md:1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
            <img class="w-full" src="${previewURL}">
            <div class="p-4">
               <p class="font-bold">
                    ${likes}<span class="font-light"> Me Gusta</span>
               </p> 
               <p class="font-bold">
                    ${views}<span class="font-light">Veces Vistas</span>
               </p> 
               <a 
                 class=" block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-"
                 href="${largeImageURL}" target="_black" rel="noopener noreferrer" >Ver Imagen</a>
            </div>
        </div>
        `
    });
    
}