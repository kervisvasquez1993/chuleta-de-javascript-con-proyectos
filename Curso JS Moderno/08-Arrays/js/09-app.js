const carrito = [
    { nombre : 'televisor', precio  : 300 },
    { nombre : 'telefono', precio  : 500 },
    { nombre : 'teclado', precio  : 30}
        ]
 

carrito.forEach(producto => {
    console.log(` nombre: ${producto.nombre} precio : ${producto.precio}`)
})