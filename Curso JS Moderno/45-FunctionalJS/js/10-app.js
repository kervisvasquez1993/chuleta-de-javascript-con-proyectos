const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})
/* pasando argumento */
const guardarEmail = info => ({
    agregarEmail(email)
    {
        info.email = email
        console.log(`Guardando Email en ${info.email}`)
        
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
})

function Cliente(nombre, email, empresa)
{
    let info = {
        nombre,
        email,
        empresa,
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
        
      
    )
}

function Empleado(nombre, email, puesto)
{
    let info = 
    {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info ),
        
        
    )

}

const cliente  = Cliente('kervis', null, 'kervis vasquez C.A.')
cliente.mostrarNombre()
cliente.agregarEmail('kervisvasquez@gmail.com')
cliente.mostrarEmail();


console.log("<=======test======>");
const empleado = Empleado('Pedro', null, 'programador')
empleado.mostrarNombre();
empleado.agregarEmail('correo@correo.com') // guardar el email
empresa.mostrarEmail();
//empleado.mostraEmail();
// esto sirve para crear funcones de uso general e ir usandola en tus objetos