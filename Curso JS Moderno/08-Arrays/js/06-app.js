// spreat operatoe 

// añandir elemento al final
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


let resultado = [...carrito,producto, producto2]
resultado = [producto3, ...resultado]
console.log(resultado)
