function *generador(){
    yield 1
     yield 'juan'
     yield 3 + 3
     yield true
}


const iterador = generador()
/*
console.log(iterador)
console.log(iterador.next().value)
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador)

*/


function *generadorCarrito(carrito){
       for(i = 0 ; i < carrito.length ; i++ ){
           yield(carrito[i])
       }
}

const carrito = ['carrito1', 'carrito2', 'carrito3', 'carrito4' ]

const iterador2 = generadorCarrito(carrito)
console.log(iterador2)
console.log(iterador2.next())
console.log(iterador2.next())