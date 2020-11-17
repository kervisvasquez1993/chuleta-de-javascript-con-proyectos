const criptomonedaSelect = document.querySelector('#criptomonedas')
const formulario = document.querySelector('#formulario')
const objBusqueda = {
    moneda       = '',
    criptomoneda = ''
}
// crear yuna promesa
const obtenerCriptomoneda = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas)
})
{}
document.addEventListener('DOMContentLoaded', () => 
{
    consultarCriptomoneda()
    formulario.addEventListener('submit', submirFormulario)
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

function submirFormulario(e)
{
    e.preventDefault()
}