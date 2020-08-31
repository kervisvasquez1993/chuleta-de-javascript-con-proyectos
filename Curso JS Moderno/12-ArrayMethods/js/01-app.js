const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },

    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]



// array metodos 

// comprobar si un balor existe en un arreglo 

meses.forEach(mes => {
    if( mes == 'Febrero'){
     //   console.log('Febrero Existe')
     
    }
   // console.log(mes)
})


const resultado = meses.includes('Enero') // retorna un booleano
console.log(resultado)

const existe = carrito.some( producto =>   producto.nombre == 'Celular'
)

//console.log(existe)

const existe2 = meses.some(mes => mes == 'febrero')
