
// metodos para string
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

