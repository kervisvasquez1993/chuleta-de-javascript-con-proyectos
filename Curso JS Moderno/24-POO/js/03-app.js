//herencia// class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre,
        this.saldo = saldo
    }

    mostrarInformacion() {
        return ` Nombre ${this.nombre} saldo es ${this.saldo}`
    }

    static bienvenido() {
        return ` bienvenido al cajero`
    }

}

class Empresa extends Cliente{
    constructor(nombre,saldo, telefono, categoria){
        super(nombre, saldo),
        this.telefono = telefono,
        this.categoria = categoria
    }

    static bienvenido() {
        return ` bienvenido al cajero de empresa`
    }
}


console.log(Cliente.bienvenido())
const dynamics = new Empresa('dynamics', 400000)
console.log(dynamics)