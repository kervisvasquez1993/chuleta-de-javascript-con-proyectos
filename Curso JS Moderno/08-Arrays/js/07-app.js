// eliminar ultimo elemento de un carrito
const carrito = []

const producto = {
    nombre : 'televisor',
    precio  : 300
}
const producto2 = {
    nombre : 'telefono',
    precio  : 500
}

const producto3 = {
    nombre : 'teclado',
    precio  : 30
}
carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)
//carrito.pop()
//carrito.shift()
carrito.splice(1,1) // (psicion donde inicia, cantidad de elemento a eliminar)
console.table(carrito)