// factory = crea objeto basado en cierta condicion 

class InputHTML
{
    constructor(type, nombre)
    {
        this.type   = type;
        this.nombre = nombre;
    }

    crearInput()
    {
        return `<input type=${this.type} name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemnto(tipo,nombre)
    {
        switch(tipo)
        {
            
            case 'text':
                return new InputHTML('text', nombre)
            case 'tel':
                return new InputHTML('tel', nombre)
            default:
                return;
        }
    }

}

const elemtento = new HTMLFactory()
const inputText = elemtento.crearElemnto('text','nombre-cliente')
const inputTel = elemtento.crearElemnto('tel','telefono del cliente')
console.log(inputText.crearInput())
console.log(inputTel.crearInput())
