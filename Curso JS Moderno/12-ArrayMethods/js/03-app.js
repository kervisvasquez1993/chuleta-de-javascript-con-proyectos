const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión',          precio: 100 },
    { nombre: 'Tablet',              precio: 200 },
    { nombre: 'Audifonos',           precio: 300 },
    { nombre: 'Teclado',             precio: 400 },
    { nombre: 'Celular',             precio: 700 },
]

let total = 0 
carrito.forEach(productos => total += productos.precio)


// con un reduce 
let resultado = carrito.reduce((total, producto)  => total + producto.precio, 0 /* conste de la inicializacion */ )
console.log(resultado)