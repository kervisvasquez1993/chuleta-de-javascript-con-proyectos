// metodo para no modificar las variibales
"use strict"

const producto = {
    nombre : 'producto1',
 //propiedad o llave : valor
    precio : 300,
    disponible : true,
    
    
}
Object.freeze(producto)

//producto.disponible = false
//producto.imagen = "imagen.jpg"
// delete producto.precio
console.log(Object.isFrozen(producto))

