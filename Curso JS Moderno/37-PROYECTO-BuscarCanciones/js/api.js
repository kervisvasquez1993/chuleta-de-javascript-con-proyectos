import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion)
    {
        this.artista = artista
        this.cancion = cancion
    }

    consultarAPI()
    {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            if(resultado.lyrics){
                const {lyrics} = resultado
            UI.divResultado.textContent = lyrics
            console.log(lyrics)
            UI.headingResultado.textContent = ` Letra de la cacion "${this.cancion}" y artista "${this.artista}"`
            }
            else{
                UI.divMensaje.textContent = 'La cancion no existe, prueba con otra'
                UI.divMensaje.classList.add('error')
                setTimeout( ()=>{
                    UI.divMensaje.textContent = ""
                    UI.divMensaje.classList.remove('error')
                }, 1000)
            }
            
        })

    }
}

export default API