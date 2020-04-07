// function

let aprendiendo
aprendiendo = function()
{
    console.log('aprendiendo js')
}
aprendiendo = () => 
{
    console.log('aprendiendo arrow function')
}
aprendiendo = () => 'aprendiendo arrow function con js'
 aprendiendo = (tecnologia) => ` aprendiendo ${tecnologia}`
aprendiendo = (e1,e2) => ` dos parametros ${e1} , ${e2}`
console.log(aprendiendo('con kervos', 'eliza')) 

const letra = ['hola', 'dos', 'coroo']
const cantidadLetra = letra.map((num) =>
{
    return num.length
})

console.log(cantidadLetra)

// forEach 
const productos = ['casa','carro','azucar','mujer']
productos.forEach( producto => {
    console.log(producto)
} )