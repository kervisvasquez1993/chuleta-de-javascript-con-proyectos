const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión',          precio: 100 },
    { nombre: 'Tablet',              precio: 200 },
    { nombre: 'Audifonos',           precio: 300 },
    { nombre: 'Teclado',             precio: 400 },
    { nombre: 'Celular',             precio: 700 },
]


// filter crea un nuevo arreglo basado en el parametro que es evaluado

let resultado 

resultado = carrito.filter(producto => producto.precio > 300)

resultado = carrito.filter(producto => producto.precio < 600)

resultado = carrito.filter(producto => producto.nombre !== 'Teclado')
console.log(resultado)