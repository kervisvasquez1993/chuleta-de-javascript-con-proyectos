// campos del formulario
const mascotaInput     =   document.querySelector('#mascota')
const propietarioInput =   document.querySelector('#propietario')
const telefonoInput    =   document.querySelector('#telefono')
const fechaInput       =   document.querySelector('#fecha')
const horaInput        =   document.querySelector('#hora')
const sintomasInput    =   document.querySelector('#sintomas')

// UI
const formulario       =   document.querySelector('#nueva-cita')
const contenedorCitas       =   document.querySelector('#citas')


class Citas {
        constructor(){
            this.citas = []
        }

        agregarCita(cita){
            this.citas = [...this.citas,cita]

            console.log(this.citas)
        }
}

class UI {
        imprimirAlerta(mensaje,tipoMensaje){
            const divMensaje = document.createElement('div')
            divMensaje.classList.add('text-center','alert', 'd-block','col-12')

            // agregar clase si es tipo error
           if(tipoMensaje === 'error')
           {
               divMensaje.classList.add('alert-danger')
           }
           else{
            divMensaje.classList.add('alert-success')
           }
           divMensaje.textContent = mensaje

           // agregar al DOM 
           document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'))

           setTimeout( ()=> {
               divMensaje.remove()
           }, 5000)

        }
}


const ui = new UI()
const administrarCitas = new Citas()
// REGISTRAR EVENTO
eventListeners()

function eventListeners(){
    mascotaInput.addEventListener('input', datosCitas)
    propietarioInput.addEventListener('input', datosCitas)
    telefonoInput.addEventListener('input', datosCitas)
    fechaInput.addEventListener('input', datosCitas)
    horaInput.addEventListener('input', datosCitas)
    sintomasInput.addEventListener('input', datosCitas)

    formulario.addEventListener('submit', nuevaCita)
}


const citasObj = {
    mascota     : '',
    propietario : '',
    telefono    : '',
    fecha       : '',
    hora        : '',
    sintomas    : '',
}


// AGREGA DATOS AL OBJETO DE CITAS 
function datosCitas(e){
   citasObj[e.target.name] /* acceder a las prpiedades */ = e.target.value 
 

}

// valida y agrega una nueva cita a la clase de citas

function nuevaCita(e){
    e.preventDefault()
    // extraer la infrmacion del objeto
    const {mascota, propietario, telefono, fecha, hora,sintomas,} = citasObj
    // validad 
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '')
    {
        ui.imprimirAlerta('todos los campos son Obligatorio', 'error')
        return
    } 

    // generar ID
    citasObj.id = Date.now()

    // creando una nueva cita



    administrarCitas.agregarCita({...citasObj}) // {...citasObj} es para tomar una copia del objeto
     // reiniciar objeto para la validacion 
     reiniciarObjeto()
     formulario.reset()
}


function reiniciarObjeto(){
    citasObj.mascota = '',
    citasObj.propietario = '',
    citasObj.telefono = '',
    citasObj.fecha = '',
    citasObj.hora = '',
    citasObj.sintomas = ''
}