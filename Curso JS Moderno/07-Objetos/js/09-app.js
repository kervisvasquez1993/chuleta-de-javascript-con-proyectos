"use strict"

const producto = {
    nombre : 'producto1',
 //propiedad o llave : valor
    precio : 300,
    disponible : true,
    
    
}
Object.seal(producto) // solo me permite modificar el objeto
producto.disponible = false
console.log(producto)
console.log(Object.isSealed(producto))