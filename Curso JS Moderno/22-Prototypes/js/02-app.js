function Client(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

const juan = new Client('JUAN', 300)

function formatearCliente(cliente){
    const { nombre, saldo } = cliente
    return ` el Cliente es ${nombre} y su saldo es ${saldo}`
}

console.log(formatearCliente(juan))

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria= categoria
}


function formatearEmpresa(Empresa){
    const { nombre, saldo, categoria } = Empresa
    return ` la Empresa es ${nombre}, su saldo es ${saldo} y su categria es ${categoria}`
}

const Dynamics = new Empresa('DYNAMICS', 8000, 'medicamentos')

console.log(formatearEmpresa(Dynamics))