const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión',          precio: 100 },
    { nombre: 'Tablet',              precio: 200 },
    { nombre: 'Audifonos',           precio: 300 },
    { nombre: 'Teclado',             precio: 400 },
    { nombre: 'Celular',             precio: 700 },
]


// fideIndex
/*
meses.forEach((mes, posicion) => {
    // console.log(`${posicion} : ${mes}`)
    if(mes == 'Mayo'){
        console.log(`${mes} fue encontrado en el indice ${posicion}`)
    }else{
        console.log(` el valor no se encuentra en el indice`)
    }
} )
*/

const indice = meses.findIndex( mes => mes === 'Abril')
// si no encuentra el valor, regresa -1

if(indice == -1){
    console.log(`El valor no fue encontrado`)
}else{
    console.log(`el indice del valor es ${indice}`)
}

const objetos = carrito.findIndex( producto => producto.precio == 100) // solo retorna el primero que encuentre 

console.log(objetos)