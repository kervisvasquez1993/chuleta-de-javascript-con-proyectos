const producto = `monitor 20 pulgadas`
// replace -- para reemplazar
console.log(producto)
console.log(producto.replace('pulgadas', '"'))
console.log(producto.replace('monitor', 'Monitor Curvo'))
// .slice para cortar
console.log(producto.slice(0,10))
console.log(producto.slice(2,1))

// alternativa a slice 
console.log(producto.substring(0,10))
console.log(producto.substring(3,1))
const usuario = "kervis"
console.log(usuario.substring(0,1).toUpperCase())
console.log(usuario.charAt(0))