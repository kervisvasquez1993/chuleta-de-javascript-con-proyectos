const criptomonedaSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const objBusqueda = {
    moneda       : '',
    criptomoneda : ''
}
// crear yuna promesa
const obtenerCriptomoneda = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas)
})
{}
document.addEventListener('DOMContentLoaded', () => 
{
    consultarCriptomoneda()
    formulario.addEventListener('submit', submitFormulario)
    criptomonedaSelect.addEventListener('change', leerValor)
    monedaSelect.addEventListener('change', leerValor)
})

function consultarCriptomoneda()
{
   const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => obtenerCriptomoneda(resultado.Data))
    .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function selectCriptomonedas(criptomonedas)
{
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo
        const option = document.createElement('option')
        option.value = Name
        option.textContent = FullName
        criptomonedaSelect.appendChild(option)
    });
}
function leerValor(e)
{
    //escribir en el objeto
    objBusqueda[e.target.name] = e.target.value

    
}
function submitFormulario(e)
{
    e.preventDefault()
    const { moneda, criptomoneda } = objBusqueda
    if(moneda === '' || criptomoneda === '')
    {
        mostrarAlerta('Ambos campos Son requeridos')
    }

    consultarApi()

}

function mostrarAlerta(msj)
{
    const existeError = document.querySelector('.error')
    if(!existeError)
    {
    const divMensaje = document.createElement('div')
    divMensaje.classList.add('error')

    // mensaje de error
    divMensaje.textContent = msj
    formulario.appendChild(divMensaje)
    setTimeout( () => {
        divMensaje.remove()
    }, 3000)
    }
}

function consultarApi()
{
    const { moneda, criptomoneda } = objBusqueda
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    fetch(url)
    .then( respuesta  => respuesta.json())
    .then( cotizacion => {
        mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda])
    })
}


function mostrarCotizacion(cotizacion)
{
    console.log(cotizacion)
}