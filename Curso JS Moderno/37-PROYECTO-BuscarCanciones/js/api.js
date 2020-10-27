import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion)
    {
        this.artista = artista
        this.cancion = cancion
    }

    consultarAPI(){
        console.log('desde consultar api')
    }

}

export default API