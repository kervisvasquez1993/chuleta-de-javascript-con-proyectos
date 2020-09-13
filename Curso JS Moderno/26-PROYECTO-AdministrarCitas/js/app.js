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

let editando

class Citas {
        constructor(){
            this.citas = []
        }

        agregarCita(cita){
            this.citas = [...this.citas,cita]

        
        }

        eliminarCita(id)
        {
            this.citas = this.citas.filter(cita => cita.id !== id)
        }

        editarCita(citaActualizada){
            this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita) // itera en cada item si son iguales esa es la cita que estan editando y se actualiza la cita
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

        imprimirCitas({citas}) // desectruturando el objeto desde los parametrs
        { 

            this.linmpiarHTML()
            citas.forEach( cita => {
                const {mascota, propietario , telefono , fecha , hora , sintomas, id } = cita

                const divCita = document.createElement('div')
                divCita.classList.add('cita', 'p-3') 
                divCita.dataset.id = id
                //scripting de los elementos de las citas
                const mascotaParrafo = document.createElement('h3')
                mascotaParrafo.classList.add('card-title', 'font-weigth-bolder')
                mascotaParrafo.textContent = mascota

                const propietarioParrafo = document.createElement('p')
                propietarioParrafo.innerHTML = `
                    <span class="font-weigth-bolder"> Propietario </span> : ${propietario}
                `

                const telefonoParrafo = document.createElement('p')
                telefonoParrafo.innerHTML = `
                    <span class="font-weigth-bolder"> Teléfono </span> : ${telefono}
                `

                const fechaParrafo = document.createElement('p')
                fechaParrafo.innerHTML = `
                    <span class="font-weigth-bolder"> Fecha </span> : ${fecha}
                `

                const horaParrafo = document.createElement('p')
                horaParrafo.innerHTML = `
                    <span class="font-weigth-bolder"> Hora </span> : ${hora}
                `


                const sintomaParrafo = document.createElement('p')
                sintomaParrafo.innerHTML = `
                    <span class="font-weigth-bolder"> Sintomas </span> : ${sintomas}
                `


                // boton para eliminar esta cita

                const btnELiminar = document.createElement('button')
                btnELiminar.classList.add('btn', 'btn-danger', 'mr-2')
                btnELiminar.innerHTML = ` ELiminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> `

                btnELiminar.onclick =() => eliminarCita(id)
                
                //añadir botn para editar cita
                const btnEditar = document.createElement('button')
                btnEditar.classList.add('btn','btn-info')
                btnEditar.innerHTML = `
                Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                `
                btnEditar.onclick = () => cargarEdicion(cita)

                divCita.appendChild(mascotaParrafo)
                divCita.appendChild(propietarioParrafo)
                divCita.appendChild(telefonoParrafo)
                divCita.appendChild(fechaParrafo)
                divCita.appendChild(horaParrafo)
                divCita.appendChild(sintomaParrafo)
                divCita.appendChild(btnELiminar)
                divCita.appendChild(btnEditar)

                contenedorCitas.appendChild(divCita)
            })

        }

        linmpiarHTML()
        {
            while(contenedorCitas.firstChild){
                contenedorCitas.removeChild(contenedorCitas.firstChild)
            }
            // mientras sea verdadera la condicion vamos ir eliminando cada uno de los hijos del contenedor de citas
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


    //editando

    if(editando)
    {
        ui.imprimirAlerta('Editado Correctamente')
        // pasar el objeto de la cita a edicion 
        administrarCitas.editarCita({...citasObj}) // pasamso una copia de citasObj


        //rescribir el text del frmulari a su valor original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita'
        editando = false
        
    }
    else{
        // generar ID
         citasObj.id = Date.now()
        // creando una nueva cita
        administrarCitas.agregarCita({...citasObj}) // {...citasObj} es para tomar una copia del objeto
        //mensaje de agregad correctamente
        ui.imprimirAlerta('Se agrego correctamente')

    }

   
     // reiniciar objeto para la validacion 
     reiniciarObjeto()
     formulario.reset()

     // mostrar el html de las citas

     ui.imprimirCitas(administrarCitas)

}


function reiniciarObjeto(){
    citasObj.mascota = '',
    citasObj.propietario = '',
    citasObj.telefono = '',
    citasObj.fecha = '',
    citasObj.hora = '',
    citasObj.sintomas = ''
}


function eliminarCita(id){
    //eliminar la cita en la clase principal
    administrarCitas.eliminarCita(id)

    // mostrar el mansaje
    ui.imprimirAlerta('La cita se eliminó Correctamente')

    // refrescar

    ui.imprimirCitas(administrarCitas)
}


function cargarEdicion(cita)
{
    const {mascota, propietario , telefono , fecha , hora , sintomas, id } = cita
    
    //llenar ls input

     mascotaInput.value       =   mascota
     propietarioInput.value   =   propietario
     telefonoInput.value      =   telefono
     fechaInput.value         =   fecha
     horaInput.value          =   hora
     sintomasInput.value      =   sintomas
     
     //LLENAR EL OBJET
     citasObj.mascota     = mascota
     citasObj.propietario = propietario
     citasObj.telefono    = telefono
     citasObj.fecha       = fecha
     citasObj.hora        = hora
     citasObj.sintomas    = sintomas
     citasObj.id          = id

     // CAMBIAR EL NOMBRE DEL BOTOM

     formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'
    editando = true
}