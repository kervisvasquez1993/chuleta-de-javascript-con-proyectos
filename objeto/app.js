//primera forma 
const cliente = {
    nombre: 'kervis',
    saldo : 200, 
    tipoCliente : function()
    {
        let tipo
        if(this.saldo > 1000)
        {
            tipo = 'Golp'
        }
        else if( this.saldo > 5000)
        {
            tipo = 'platino'
        }
        else
        {
            tipo =  'Normal'
        }
        return tipo
    }
}
console.log(cliente.tipoCliente())

// metodo alternativo para crear objeto

function CCliente(nombre, saldo)
{
    this.nombre = nombre
    this.saldo = saldo
    this.tipoCliente = function()
    {
        let tipo
        if(this.saldo > 1000)
        {
            tipo = 'Golp'
        }
        else if( this.saldo > 5000)
        {
            tipo = 'platino'
        }
        else
        {
            tipo =  'Normal'
        }
        return tipo
    }
}
const persona = new CCliente('kervis', 20000 )
console.log(persona)

// clasess

class Nuevoc {
    constructor(nombre, apellido, saldo)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.saldo = saldo
    }
    imprimirSaldo()
    {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }
    tipoCliente()
    {
        let tipo
    }
}

const maria = new Nuevoc('maria', 'vasquez', 2000)

console.log(maria.imprimirSaldo())
