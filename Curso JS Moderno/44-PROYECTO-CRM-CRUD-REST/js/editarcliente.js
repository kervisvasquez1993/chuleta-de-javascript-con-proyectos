import {mostrarAlerta, validar } from './funciones.js';
import {obtenerClientesEditar,editarCliente} from './API.js'
(function(){

    const nombreInput   = document.querySelector('#nombre')
    const emailInput    = document.querySelector('#email')
    const empresaInput  = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput       = document.querySelector('#id')
    document.addEventListener('DOMContentLoaded', async () =>
    {
        const parametroURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametroURL.get('id'))
        const cliente = await obtenerClientesEditar(idCliente)
        mostrarCliente(cliente)

        // submit al formulario
        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    })
    function mostrarCliente(cliente)
    {
        
        const {nombre,email, id, empresa,telefono} = cliente;
        nombreInput.value   = nombre;
        emailInput.value    = email;
        empresaInput.value  = empresa;
        telefonoInput.value = telefono;
        idInput.value       = id 
    }
    function validarCliente(e)
    {
        e.preventDefault();
        const cliente = {
            nombre   : nombreInput.value,
            email    : emailInput.value,
            telefono : telefonoInput.value,
            empresa  : empresaInput.value,
            id       : parseInt(idInput.value) 
        }
        
        
        if(validar(cliente))
        {
            mostrarAlerta('Todos los campos son Obligatorio')
            return 
        }
        // reescribir el objeto
        editarCliente(cliente);
    }
})()