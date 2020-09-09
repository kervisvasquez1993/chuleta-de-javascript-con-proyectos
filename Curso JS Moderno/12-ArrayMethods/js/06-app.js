const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['septimbre', 'octubre']

let  resultado = carrito.every(producto => producto.precio < 500)
console.log(resultado)



 resultado = carrito.some(producto => producto.precio < 500)
console.log(resultado)