const carrito = [
    { nombre : 'televisor', precio  : 300 },
    { nombre : 'telefono', precio  : 500 },
    { nombre : 'teclado', precio  : 30}
        ]
 
        carrito.forEach(producto => {
            console.log(` nombre: ${producto.nombre} precio : ${producto.precio}`)
        })

       const carrito2 =  carrito.map(producto => {
        return` nombre: ${producto.nombre} precio : ${producto.precio}`
       })

       console.log(carrito2)

       // map crear un nuevo arreglo y forEach no