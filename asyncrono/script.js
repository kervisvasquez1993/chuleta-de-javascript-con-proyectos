const ciudades = ['londres', 'new york', 'madrid']
// funcion inline y sin nombre
ciudades.forEach(function(ciudad){
    console.log(ciudad)
})

function callback(ciudad)
{
    console.log(ciudad)
}

ciudades.forEach(callback)

// ejemplo de callback 
const paises = ['vanezuela','colombia','brazil']
function nuevoPais(pais, callback)
{
    setTimeout(function(){
        paises.push(pais)
        callback()
    }, 2000)


}
function mostrarPaises()
{
    setTimeout(function(){
        let html = ''
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`
        })
        document.getElementById('app').innerHTML = html
    }, 1000 )
}

nuevoPais('argentina', mostrarPaises)
mostrarPaises()