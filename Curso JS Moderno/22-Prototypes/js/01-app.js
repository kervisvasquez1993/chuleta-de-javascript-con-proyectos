const producto = {
    nombre : 'kervis',
    precio : 300
}

 function Client(nombre, saldo){
     this.nombre = nombre,
     this.saldo = saldo
 }

const juan = new Client('JUAN', 300)
console.log(juan)
 console.log(producto)