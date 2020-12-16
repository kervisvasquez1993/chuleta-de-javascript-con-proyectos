//eliminar espacio en blanco
const producto = `      monitor 20 pulgadas    `
console.log(producto)
console.log(producto.trimStart())
console.log(producto.trimEnd())
console.log(producto.trimStart().trimEnd().length)
console.log(producto.trim().length)