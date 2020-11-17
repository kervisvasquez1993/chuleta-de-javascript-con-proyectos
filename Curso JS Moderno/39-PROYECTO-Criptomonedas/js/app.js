const criptomonedaSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
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
    mostrarSpiner()
    fetch(url)
    .then( respuesta  => respuesta.json())
    .then( cotizacion => {
        mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda])
    })
}


function mostrarCotizacion(cotizacion)
{
    limpiarHTML()
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion
    const precio = document.createElement('p')
    precio.classList.add('precio')
    precio.innerHTML = ` El Precio es: <span>${PRICE}</span>`
    
    const precioAlto = document.createElement('p')
    precioAlto.innerHTML = ` El precio mas alto del dia <span>${HIGHDAY}</span>`

    const precioBajo = document.createElement('p')
    precioBajo.innerHTML = ` El precio mas Bajo del dia <span>${LOWDAY}</span>`

    const variacion = document.createElement('p')
    variacion.innerHTML = `Variacion en las Ultimas 24 horas <span>${CHANGEPCT24HOUR}%</span>`

    const UPDATE = document.createElement('p')
    UPDATE.innerHTML = `ÚLTIMA ACTUALIZACION <span>${LASTUPDATE}</span>`
    resultado.appendChild(precio)
    resultado.appendChild(precioAlto)
    resultado.appendChild(precioBajo)
    resultado.appendChild(variacion)
    resultado.appendChild(UPDATE)
}

 function limpiarHTML()
 {
     while(resultado.firstChild)
     {
         resultado.removeChild(resultado.firstChild)
     }
 }

 function mostrarSpiner()
 {
     limpiarHTML()
     const spiner = document.createElement('div')
     spiner.classList.add('spinner')
     spiner.innerHTML = `
     <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
     </div>
     `
     resultado.appendChild(spiner)
 }