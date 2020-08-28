const producto =
{
    nombre       : 'producto1',
 //propiedad o llave : valor
    precio       : 300,
    disponible   : true,
    informacion  : {
                     peso : '1kg',
                     medida : '3m',
                   
                     fabrica : {
                        dynamics : 'test'
                    }
                    }
                   
                   
}

// const { peso, medida } = producto.informacion

const { nombre, precio, disponible, informacion, informacion: { peso , medida, fabrica, fabrica : {dynamics} } } = producto


console.log(dynamics)
