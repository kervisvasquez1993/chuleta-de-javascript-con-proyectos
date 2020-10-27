const container  = document.querySelector('.container'),
      resultado  = document.querySelector('#resultado'),
      formulario = document.querySelector('#formulario')
window.addEventListener('load', () => 
{
          formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const ciudad = document.querySelector('#ciudad').value
                const pais   = document.querySelector('#pais').value
                // consultariamos la API

                

                if(ciudad == '' || pais == '')
                {
                    mostrarError('Ambos campos son obligatorios')
                    return
                }
                consultarApi(ciudad,pais)
          })
          
})
function mostrarError(mensaje)
{
    let alerta = document.querySelector('.bg-red-100')
        if(!alerta)
            {
              // crear una alerta 
              const alerta = document.createElement('div')
              alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
              'max-w-md', 'mx-auto', 'mt-6', 'text-center');
              alerta.innerHTML = 
                  `
                        <strong class="font-bold">Error!</strong>
                        <span class="block">${mensaje}</span>
                  `
              container.appendChild(alerta)
              
              setTimeout( ()=>
              {
                  alerta.remove()
              }, 5000)

            }
        }

  
function consultarApi(ciudad, pais)
      {
        const appID = '63b14d18fafbf0ff975b4f2d0ee0c47b';
        const url   = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
        Spiner()
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML() // limpiar html
            console.log(datos)
            if(datos.cod == "404"){
                mostrarError('Ciudad no Encontrada')
                return
            }
            
            //imprimir la respuesta de los valores
            mostrarDatos(datos)
        })
      }


      const kevinAcentigrados = grados =>  parseInt(grados - 273.15)
      


      function mostrarDatos(datos)
      {
          const { name ,main: { temp,temp_max, temp_min }} = datos
          const centigrados  =  kevinAcentigrados(temp)
          const max          =  kevinAcentigrados(temp_max)
          const min          =  kevinAcentigrados(temp_min)
          const actual       =  document.createElement('p')
          actual.innerHTML   =  `${centigrados} &#8451`
          actual.classList.add('font-bold','text-6xl')
          const nombreCiudad = document.createElement('h4')
          const resultadoDiv = document.createElement('div')
          const tempMaximo   = document.createElement('p')
          const tempMinimo   = document.createElement('p')
          nombreCiudad.innerHTML = `${name}`
          tempMaximo.innerHTML = `Temperatura Maxima ${max} &#8451`
          tempMinimo.innerHTML = `Temperatura Minima ${min} &#8451`
          tempMaximo.classList.add('text-xl', 'text-center','text-white')
          tempMinimo.classList.add('text-xl', 'text-center','text-white')
          resultadoDiv.classList.add('text-center','text-white')
          nombreCiudad.classList.add('text-3xl', 'text-center','text-white')
          resultadoDiv.appendChild(nombreCiudad)
          resultadoDiv.appendChild(actual)
          resultado.appendChild(resultadoDiv)
          resultado.appendChild(tempMaximo)
          resultado.appendChild(tempMinimo)

      }


      function limpiarHTML()
      {
          while(resultado.firstChild)
          {
              resultado.removeChild(resultado.firstChild)
          }
      }

      function Spiner()
      {
          limpiarHTML()
          const divSpinner = document.createElement('div')
          divSpinner.classList.add('sk-fading-circle')
          divSpinner.innerHTML = `
            <div class="sk-fading-circle">
              <div class="sk-circle1 sk-circle"></div>
              <div class="sk-circle2 sk-circle"></div>
              <div class="sk-circle3 sk-circle"></div>
              <div class="sk-circle4 sk-circle"></div>
              <div class="sk-circle5 sk-circle"></div>
              <div class="sk-circle6 sk-circle"></div>
              <div class="sk-circle7 sk-circle"></div>
              <div class="sk-circle8 sk-circle"></div>
              <div class="sk-circle9 sk-circle"></div>
              <div class="sk-circle10 sk-circle"></div>
              <div class="sk-circle11 sk-circle"></div>
              <div class="sk-circle12 sk-circle"></div>
            </div>
          `
          resultado.appendChild(divSpinner)
      }