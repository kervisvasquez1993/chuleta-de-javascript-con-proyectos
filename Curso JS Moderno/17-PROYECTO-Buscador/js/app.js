const resultado = document.querySelector('#resultado')
const maxYear = new Date().getFullYear()
const minYear = maxYear - 10
const year = document.querySelector('#year')
const marca = document.querySelector('#marca')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
// generar un objeto con la busqueda

const datoObjeto = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
 
}

//eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos) // muestras los automovil al cargar 

    //llenar select 

    llenar_select()
})
//event listener par als formularis de busqueda

marca.addEventListener('change', e=>{
    datoObjeto.marca = e.target.value

    filtrarAuto()
    
})


year.addEventListener('change', e => {
   datoObjeto.year = parseInt(e.target.value)
   filtrarAuto()

})

minimo.addEventListener('change', e => {
    datoObjeto.minimo = e.target.value
    filtrarAuto()
 
 })

 maximo.addEventListener('change', e => {
    datoObjeto.maximo = e.target.value
    filtrarAuto()
    
 
 })

puertas.addEventListener('change', e => {
    datoObjeto.puertas = parseInt(e.target.value)
    filtrarAuto()
 })
 transmision.addEventListener('change', e => {
    datoObjeto.transmision = e.target.value
    filtrarAuto()
 })

  color.addEventListener('change', e => {
    datoObjeto.color = e.target.value
    filtrarAuto()
 })


// funciones
function mostrarAutos(autos){
    limpiarHTML() //elimina el html previ
     autos.forEach(auto => {
         const {marca,modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = ` ${marca} : ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color} `
        // insertar en el html 
        resultado.appendChild(autoHTML)
  })
}

//limpiar html 

function limpiarHTML(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenar_select(){
    for(let i = maxYear; i >= minYear; i--){
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}

// funciones para filtrar
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca )
                           .filter(filtrarYear)
                           .filter(filtrarMinimo)
                           .filter(filtrarMaximo)
                           .filter(filtrarPuerta)
                           .filter(filtraTransmision)
                           .filter(filtrarColor) // dentro de filter agregaremos una funcion de alto nivel
    // console.log(resultado)
    //llamar la funcion que imprime el html 
    mostrarAutos( resultado)

}

// funcion que va a ser iterada por filter
function filtrarMarca(auto){
    const {marca} = datoObjeto
   
    if(marca){
         return auto.marca === marca
    }
    return auto
}

// fin de lgica para filtrar auto 

function filtrarYear(auto){
    const {year} = datoObjeto
   
    if(year){
         return auto.year === year
    }
    return auto
}

function filtrarMinimo(auto){
    const {minimo} = datoObjeto
   
    if(minimo){
         return auto.precio >= minimo
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo} = datoObjeto
   
    if(maximo){
         return auto.precio <= maximo
    }
    return auto
}

function filtrarPuerta(auto){
    const {puertas} = datoObjeto
   
    if(puertas){
         return auto.puertas === puertas
    }
    return auto
}

function filtraTransmision(auto){
    const {transmision} = datoObjeto
   
    if(transmision){
         return auto.transmision === transmision
    }
    return auto
}

function filtrarColor(auto){
    const {color} = datoObjeto
   
    if(color){
         return auto.color === color
    }
    return auto
}
