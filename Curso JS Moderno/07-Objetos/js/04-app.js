const producto = {
    nombre : 'producto1',
 //propiedad o llave : valor
    precio : 300,
    disponible : true,
    
    
}

// extraer un valor del objeto =====>>>>> forma vieja 
//const nombre = producto.nombre
//console.log(nombre)

// object destructuring
const { nombre, precio, disponible } = producto
      
console.log(precio,nombre,disponible)