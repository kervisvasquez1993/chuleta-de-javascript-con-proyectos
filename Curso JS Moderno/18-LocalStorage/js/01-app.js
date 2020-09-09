localStorage.setItem('nombre', 'kervis') // solo almacena string

//sessionStorage.setItem('nombre','kervis')

const productos = {
    nombre : 'telefono',
    precio : 300
}

const productoString = JSON.stringify(productos)
console.log(typeof productoString)

localStorage.setItem('producto', productoString)

const meses = ['enero', 'febrer','marzo']

const mesesString = JSON.stringify(meses)
localStorage.setItem('meses', mesesString)