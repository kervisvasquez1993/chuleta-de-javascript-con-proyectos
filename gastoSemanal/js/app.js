// variables

const presupuestoUsuario = prompt('cual es su presupuesto semanal')
let cantidadPresupuesto
const formulario = document.getElementById('agregar-gasto')


// clases de presupuesto

class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
    }

    // metodo para restar

    presupuentoRestante(cantidad = 0 ){
        return this.restante -= Number(cantidad)

    }

}


class Interfaz {
    insertarPresupuesto(cantidad){
    const presupuestSpan = document.querySelector('span#total')
    const restanteSpan = document.querySelector('span#restante')


    // insertar en el html
    presupuestSpan.innerHTML = `${cantidad}`
    restanteSpan.innerHTML = `${cantidad}`
    }

    imprimirMensaje(mensaje,tipo){
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert')
        if(tipo === 'error')
        {
            divMensaje.classList.add('alert-danger')
        }
        else
        {
            divMensaje.classList.add('alert-success')
        }
        divMensaje.appendChild(document.createTextNode(mensaje))
        // insertar en el DOM 
        document.querySelector('.primario').insertBefore(divMensaje,formulario) // insertando element en el dom 
        //quitar el alert despues de 3 segundo 
        setTimeout(()=>{
            document.querySelector('.primario .alert').remove()
            formulario.reset()
        },3000)
    }

    // inserta los gastos a la lista 
    agregarGastoListado(nombre, cantidad)
    {
        const gastosListado = document.querySelector('#gastos ul')

        //crear li

        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        // insertar el gasto 
        li.innerHTML = `
            ${nombre}
            ${cantidad}
        `
        gastosListado.appendChild(li)
    }

    // comprueba el presupuest restante
    presupuentoRestante(cantidad){
        const restante = document.querySelector('span#restante')
        const presupuesteRestanteUsuario = cantidadPresupuesto.presupuentoRestante(cantidad)
        restante.innerHTML = `${presupuesteRestanteUsuario}`
    }
}


// eventos

document.addEventListener('DOMContentLoaded', () => {
    if(presupuesto === null || presupuesto === ''){
        window.location.reload()
        
    }else{
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
        
        //instanciar 
        const ui = new Interfaz()
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)

        
    }
})

// formulario submit 

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombreGasto = document.querySelector('#gasto').value
    const cantidadGasto = document.querySelector('#cantidad').value
    // instanciar la interfaz

    const ui = new Interfaz()
    if(nombreGasto === '' || cantidadGasto === '')
      {
          ui.imprimirMensaje('hubo un error', 'error')
      }
    else
      {
        ui.imprimirMensaje('Correcto', 'Correcto')
        ui.agregarGastoListado(nombreGasto, cantidadGasto)
        ui.presupuentoRestante(cantidadGasto)
      }


})