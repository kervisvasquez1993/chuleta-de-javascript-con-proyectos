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

// const [primero,segundo,tercero] = carrito

// const [ , ,tercero] = carrito

const [ primero, ...tercero] = carrito
console.log(tercero)