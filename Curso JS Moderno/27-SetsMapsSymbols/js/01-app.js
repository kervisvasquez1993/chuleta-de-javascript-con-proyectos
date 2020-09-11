// un set permite crear una lista de valores sin duplicado

const carrito = new Set()

carrito.add('camisa')
carrito.add('disco #1')
carrito.add('disco #2')
carrito.add('disco #3')

console.log(carrito.size)
console.log(carrito.has('camisa'))
carrito.delete('disco #3')
console.log(carrito)

carrito.forEach( producto => {
    console.log(producto)
})

carrito.clear()
console.log(carrito)

const productos = ['productos1', 'producto2', 'producto3']

const carrito2 = new Set(productos)
console.log(carrito2)