// unir objetos en js 

const producto =
{
    nombre : 'producto1',
 //propiedad o llave : valor
    precio : 300,
    disponible : true,
}
    
const medida = {
    peso : '1kg',
    medida: '1m'
}

const fabricacion = {
    fabrica : 'dynamics',
    lugar   : 'valencia'
}
// unir objetos
const resultado = Object.assign(producto,medida,fabricacion)
console.log(resultado)
// spread operadoor 
const resultado2 = {... producto, ...medida, ...fabrica}

console.log(resultado2)