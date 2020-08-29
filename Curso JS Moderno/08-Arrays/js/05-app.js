// añandir elemento al final

const meses = ['enero','febrero','marzo,','abrir','mayo']
meses.push('junio') // forma imperativa

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
carrito.unshift(producto3)
console.table(carrito)