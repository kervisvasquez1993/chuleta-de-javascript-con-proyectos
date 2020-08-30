const pendientes = ['tarea1', 'tarea2', 'tarea3', 'tarea4']
const carrito = [
    { producto: 'carrito1', precio: 33},
    { producto: 'carrito2', precio: 300},
    { producto: 'carrito3', precio: 400},
    { producto: 'carrito5', precio: 33},
    { producto: 'carrito6', precio: 33},
    { producto: 'carrito7', precio: 33},
]

for (let pendiente of pendientes){

    console.log(pendiente)
}

for(let producto of carrito){
    console.log(`el producto es : ${producto.producto} y su precio es de ${producto.precio}`)
}