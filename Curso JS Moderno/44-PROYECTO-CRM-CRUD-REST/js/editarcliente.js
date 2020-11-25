import {obtenerClientesEditar} from './API.js'
(function(){

    const nombreInput   = document.querySelector('#nombre')
    const emailInput    = document.querySelector('#email')
    const empresaInput  = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput       = document.querySelector('#id')
    document.addEventListener('DOMContentLoaded', async ()=>{
        const parametroURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametroURL.get('id'))
        const cliente = await obtenerClientesEditar(idCliente)
        mostrarCliente(cliente)
    })
    function mostrarCliente(cliente)
    {
        console.log(cliente);
        const {nombre,email, empresa,telefono} = cliente;
        nombreInput.value   = nombre;
        emailInput.value    = email;
        empresaInput.value  = empresa;
        telefonoInput.value = telefono
        
    }
})()