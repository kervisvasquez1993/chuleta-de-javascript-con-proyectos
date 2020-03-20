//variables
const listTweets = document.getElementById('lista-tweets')



// event listener
eventListener()
function eventListener(){
    // primer paso

    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet)

    // borrar tweets

    listTweets.addEventListener('click', borrarTweet)
    

}

// funciones

// añadir tweet
function agregarTweet(e)
    {
    e.preventDefault()
    // leer el valor de textarea
    const tweet = document.getElementById('tweet').value
    // crear boton para eliminar
    const botonDeleted = document.createElement('a')
    botonDeleted.classList = 'borrar-tweet'
    botonDeleted.innerText = 'X'
    
    // crear li 
    const li = document.createElement('li')
    li.innerText = tweet
    // añade el boton de borrar al tweet 
    li.appendChild(botonDeleted)

    // añade el tweet a la lista 
    listTweets.appendChild(li)


    // añadir al localstorage
        agregarTweetLocalStorage(tweet)
    
    }

    // elimina twee del dom 
    function borrarTweet(e)
    {
        e.preventDefault
        console.log('diste click en la lista')
        if(e.target.className === 'borrar-tweet')
        {
            e.target.parentElement.remove()
            alert('tweet eliminado')
        }
        
    }

    // agrega tweet a localstorage

    function agregarTweetLocalStorage(tweet)
    {
        let tweets
       
        tweets = obtenerTweetLocalStorage()
        tweets.push(tweet)
        localStorage.setItem('tweets', JSON.stringify(tweets))

    }

    function obtenerTweetLocalStorage()
    {
        let tweets

        if(localStorage.getItem('tweets') === null)
        {
            tweets = []

        }
        else
        {
            tweets = JSON.parse(localStorage.getItem('tweets'))
        }
        return tweets
    }