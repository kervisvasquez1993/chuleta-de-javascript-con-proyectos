const email = document.getElementById('email'),
     asunto = document.getElementById('asunto'),
     messaje = document.getElementById('mensaje'),
     enviar = document.getElementById('enviar'),
     formularioEnviar = document.getElementById('enviar-mail')
    resetBtn = document.getElementById('resetBtn')


// listener
eventListener()


function eventListener()
{
    document.addEventListener('DOMContentLoaded', iniciarApp)

    // campos formularios

    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur', validarCampo)
    mensaje.addEventListener('blur', validarCampo)
    formularioEnviar.addEventListener('submit', enviarEmail)
    resetBtn.addEventListener('click', resetFormulario)

}



// funciones
function iniciarApp()
{
    enviar.disabled = true
}
function validarCampo()
{
    // validar 
    validarLongitud(this) // this forma dinamica de saber cual es el campo
    
    if(this.type === 'email')
    {
        validarEmail(this)
    }
    let errores = document.querySelectorAll('.error')
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '')
    {   
        if(errores.length === 0)
        {
            enviar.disabled = false
           
        }
    }
}

function validarLongitud(campo)
 {
     if(campo.value.length > 0)
     {
         campo.style.borderBottomColor = 'green'
         campo.classList.remove('error')
     }
     else
     {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
     }
 }

 function validarEmail(campo)
 {
     const mensaje = campo.value
     if(mensaje.indexOf('@') !== -1 )
     {
         campo.style.borderBottomColor = 'green'
         campo.classList.remove('error')
     }
     else
     {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
     }

 }

 function enviarEmail(e)
 {
    e.preventDefault()
    // espiner al enviar
    const spiner = document.querySelector('#spinner ')
    spiner.style.display = 'block'

    // enviar email
    const enviado = document.createElement('img')
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block'

    //setTimeout

    setTimeout(function()
    {
        spiner.style.display = 'none'
        document.querySelector('#loaders').appendChild(enviado)
    }, 1500)

    setTimeout(function()
    {
        enviado.remove()
        formularioEnviar.reset()
    }, 3000)

 }

 function resetFormulario(e)
 {
     formularioEnviar.reset()
     e.preventDefault()


 }