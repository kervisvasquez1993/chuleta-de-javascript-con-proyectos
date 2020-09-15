// variables y selectores
const formulario = document.querySelector('#agregar-gasto'),
        gastoSemanal = document.querySelector('#gastos ul')
let presupuesto

//eventos

eventListener()
console.log(formulario)
function eventListener(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto)

    formulario.addEventListener('submit', agregarGasto)
}


// clases


class PresupuestoSemanal {
        constructor(presupuesto){
            this.presupuesto = Number(presupuesto )
            this.restante    = Number(presupuesto)
            this.gastos = []
        }

     

        nuevoGasto(gasto){
            
            this.gastos = [...this.gastos, gasto] // tomamos una copia de this.gasto y agregamos gasto
            
        }
}

class UI{
        insertarPresupuesto(cantidad){
           // extraer presupuesto
            const {presupuesto, restante} = cantidad
            // agregar al html
            document.querySelector('#total').textContent = presupuesto
            document.querySelector('#restante').textContent = restante
        }

        imprimirAlerta(mensaje, tipoMensaje)
        {
            // crear div mensaje 
            let divMensaje = document.createElement('div')
            divMensaje.classList.add('text-center','alert')

            if(tipoMensaje === 'error'){
                divMensaje.classList.add('alert-danger')
            }else{
                divMensaje.classList.add('alert-success')
            }

            divMensaje.textContent = mensaje

            // insertar en el html 

            document.querySelector('.primario').insertBefore(divMensaje, formulario)

            setTimeout(()=>{

            divMensaje.remove()

            }, 3000)
        }

        agregarGastoLista(gastos){

            this.limpiarHtml() // elimina el html previo
            
            // iterar sobre los gastos 
           
            gastos.forEach(gasto => {
                const  {nombre, cantidad, id} = gasto

                //li crear
                const nuevoGastoLista = document.createElement('li')
                nuevoGastoLista.className = 'list-group-item d-flex justify-content-between align-items-center'
                nuevoGastoLista.dataset.id = id
               
                // agregar el html del gasto

                nuevoGastoLista.innerHTML = `
                    ${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>
                `

                //boton borrar

                const btnBorrar = document.createElement('button')
                btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
                btnBorrar.textContent = "X"
                nuevoGastoLista.appendChild(btnBorrar)

                //agregar al html 

                gastoSemanal.appendChild(nuevoGastoLista)
            })
        }

        limpiarHtml(){
            while(gastoSemanal.firstChild){
                gastoSemanal.removeChild(gastoSemanal.firstChild)
            }
        }

    }


const ui = new UI()
//funciones

function preguntarPresupuesto(){
    const presupuestoUsiario = Number (prompt('¿Cual es tu Presupuesto?'))
    
    if(presupuestoUsiario === '' || presupuestoUsiario === null || isNaN(presupuestoUsiario) || presupuestoUsiario <= 0 ){
        
        window.location.reload()

    }
    presupuesto = new PresupuestoSemanal(presupuestoUsiario)
    ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e){
    e.preventDefault()

    const nombre = document.querySelector('#gasto').value
    const cantidad = Number (document.querySelector('#cantidad').value)
    if(nombre === '' || cantidad === '' ){
        ui.imprimirAlerta('Los Campos no pueden ir vacios', 'error')
        return
    } else if ( cantidad < 0  || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no Valida', 'error')
        return
    }

    // generar bjeto con el gasto 
    const gasto = { nombre, cantidad , id : Date.now()} // lo cntario a un descontructor Object literal
   
    presupuesto.nuevoGasto(gasto)

    ui.imprimirAlerta('Gasto agregado correctamente')

    // imprimir los gastos
    const {gastos} = presupuesto


    ui.agregarGastoLista(gastos)

    formulario.reset()
   

    
}