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


// crear un prototipo en js 

function Test(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo

} 

Test.prototype.tipoCliente = function(){
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
const cliente5 = new Test('kervis', 2000)
console.log(cliente5)

// heredar proto

function Empresa(nombre, saldo, telefono,tipo){
    Test.call(nombre,saldo)
    this.telefono = telefono
    this.tipo = tipo
}
Empresa.prototype = Object.create(Test.prototype)
const empresa1 = new Empresa('udemy', 20000, 04244444161, 'educacion')
// heredar prototipos

 console.log(empresa1.tipoCliente())

// clasess n js 

class Empleado {
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }

    saldoEmpleado(){
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`
    }
    static bienvenido(){
        return 'Bienvenido al cajero'
    }
}

class EmpresaDynamics extends Empleado{
    constructor(nombre,saldo,telefono,tipo){
        //atributo ir al cnstructor padre
        super(nombre,saldo)
        this.telefono = telefono
        this.tipo = tipo
    }
    static bienvenido(){
        return 'Bienvenido al cajero para empresa'
    }
}


const empresa2 = new EmpresaDynamics('Dynamics', 20000,123456789, 'medico' ) 

console.log(EmpresaDynamics.bienvenido())