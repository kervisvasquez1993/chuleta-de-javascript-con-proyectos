
// metodos para string

/*

let mensaje
mensaje = 'entonces dije buen curso'
mensaje = 'aprendiendo javascript, css y html para ser frontend'
console.log(mensaje.indexOf('javascript')) // para buscar parabra en js ==> devuelve un numero con la posicion
console.log(mensaje.substring(0,11)) // corta el texto primer parametro inicio segundo parametro final
console.log(mensaje.slice(0,11))
console.log(mensaje.split(' ')) // separar una cadena de texto, lo convierte en un arreglo 
console.log(mensaje.replace('css','php'))
console.log(mensaje.includes('css'))// es como indexOf pero te regresa un false
let tienda = `tienda `
console.log(tienda.repeat(5))
*/


// Metodos para numeros 

const   numero1 = 10,
        numero2 = 20,
        numero3 = 30.30,
        numero4 = .1020,
        numero5 = -3

let resultado
// suma 
resultado = numero1 + numero2
resultado = numero1 - numero2                          
resultado = numero1 / numero2
resultado = numero1 % numero2
// pi
resultado = Math.PI
resultado = Math.round(2.2)
resultado = Math.ceil(2.4)
resultado = Math.floor(2.4)
resultado = Math.sqrt(9) // sacar raiz cuadrada
resultado = Math.abs(numero5) // absoluto
resultado = Math.pow(8,3) // multiplicar a determinada potencia
resultado = Math.min(3,6,5,1,4)
resultado = Math.max(3,6,5,1,4)
resultado = Math.random()

let puntaje;
puntaje = 10
++puntaje  // asigna el valor antes de imprimirlo
puntaje++ // asiga el valor despues de imprimirlo
puntaje += 3
console.log(puntaje)
