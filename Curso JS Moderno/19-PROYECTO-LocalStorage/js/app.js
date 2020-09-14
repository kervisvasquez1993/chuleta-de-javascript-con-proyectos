// variables
const formulario = document.querySelector('#formulario')
const listaTwit = document.querySelector('#lista-tweets')
let tweets = []


// eventos
eventLIstenet()

function eventLIstenet(){
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const tweet = document.querySelector('#tweet').value
    if(tweet === ''){
        mostrarMensaje('El Mensaje no puede ir vacio')
        return // esto solo funciona en un condicional y destr de una funcion
    }


    const tweetObj = {
        id    : Date.now(),
        tweet 
    }
    // añadir al arreglo de tweets

    tweets = [...tweets, tweetObj]
    
    // crear html 
    // muestra un listado de los tweets
    crearHTML()
    // reiniciar el formulari
    formulario.reset()
})

// cunado el documento esta listo

document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [] 

    
    crearHTML()
})
}

// funciones 

function mostrarMensaje(mensaje){
        const mensajeError = document.createElement('p')
        mensajeError.classList.add('error')
        mensajeError.textContent = mensaje
        // insertarlo en el cntenido

        const contenido = document.querySelector('#contenido')
        contenido.appendChild(mensajeError)
        setTimeout(()=>{
            mensajeError.remove()
        }, 3000)
}

function crearHTML(){
   
    limpiarHTML()
    if(tweets.length > 0 ){
        
        tweets.forEach(tweet => {
            
            // btn eliminar 

            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X'
            
            // añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id)
            }

            //crear el html 
            
            const li = document.createElement('li')
            li.innerText = tweet.tweet
            li.appendChild(btnEliminar)

            // insertar en el html
           
            listaTwit.appendChild(li)
        })
    }
    sincronizarStorage()
}

// limpiar el html 
function limpiarHTML(){
    while(listaTwit.firstChild){
        listaTwit.removeChild(listaTwit.firstChild)
    }
}

// agrega ls tweet actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// borrar tweet

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id != id) // para eliminar tweet con filter
    crearHTML()
}