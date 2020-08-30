const pendientes = ['tarea1', 'tarea2', 'tarea3', 'tarea4']
const carrito = [
    { producto: 'carrito1', precio: 33},
    { producto: 'carrito2', precio: 300},
    { producto: 'carrito3', precio: 400},
    { producto: 'carrito5', precio: 33},
    { producto: 'carrito6', precio: 33},
    { producto: 'carrito7', precio: 33},
]


const automovil = {
    modelo: 'carro1',
    year: 1993,
    motor : '6,4'
}

for(propiedad in automovil){
    console.log(`${propiedad} :  ${automovil[propiedad]}`)
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log( ` ${llave} y su valor es ${valor}`)
}