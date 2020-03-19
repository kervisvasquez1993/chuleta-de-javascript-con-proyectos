let boton1 = document.querySelector('#submit-buscador')
boton1.addEventListener('click', ejecutarBoton)
function ejecutarBoton(e){
    e.preventDefault();
    let elemento
    elemento = e
    elemento = e.target
    elemento = e.target.id
    console.log(elemento)

}
//evento con el mouse 
const encabezado = document.querySelector('#encabezado')
const enlaces = document.querySelectorAll('.enlace')
const boton = document.querySelector('.boton')
const buscador = document.querySelector('#buscador')
console.log(buscador)
//click 
//boton.addEventListener('click', obtenerEvento)
//boton.addEventListener('dblclick', obtenerEvento)
//boton.addEventListener('mouseenter', obtenerEvento)
//boton.addEventListener('mouseleave', obtenerEvento)
//boton.addEventListener('mouseover', obtenerEvento)
//boton.addEventListener('mouseout', obtenerEvento)
//boton.addEventListener('mousedown', obtenerEvento)
//boton.addEventListener('mouseup', obtenerEvento)
//boton.addEventListener('mousemove', obtenerEvento)

//input

//buscador.addEventListener('keydown', obtenerEvento)
//buscador.addEventListener('keyup', obtenerEvento)
//buscador.addEventListener('keypress', obtenerEvento)
//buscador.addEventListener('focus', obtenerEvento)
//buscador.addEventListener('blur', obtenerEvento)
//buscador.addEventListener('cut', obtenerEvento)
//buscador.addEventListener('copy', obtenerEvento)
//buscador.addEventListener('paste', obtenerEvento)
//buscador.addEventListener('input', obtenerEvento)
buscador.addEventListener('change', obtenerEvento)


// event bubbling


function obtenerEvento(e){
   // document.querySelector('#encabezado').innerText = buscador.value
    console.log(`EVENTO: ${e.type}`)
}

// delegacion de eventos

function eliminarElemento(e){
    e.preventDefault
    let borrar = e.target.classList.contains('boton')
    if(borrar){
        console.log(e.target.parentElement.parentElement)
    }
     
    
}

document.body.addEventListener('click', eliminarElemento)