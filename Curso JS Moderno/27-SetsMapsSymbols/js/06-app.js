function crearIterador(carrito){

    let indice = 0

    return {
        siguiente : () => {
                const fin = ( indice >= carrito.length )
                const valor =  !fin ? carrito[indice++]: undefined  ;
                
                return {
                    fin,
                    valor
                }
        }
    }
}

const carrito = ['producto1', 'producto2', 'producto3', 'producto4']

const recorrerCarrito = crearIterador(carrito)

console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())