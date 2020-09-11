// class declaration
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

const juan = new Cliente('juan', 4000)

console.log(Cliente.bienvenido())
console.log(juan)

console.log(juan.mostrarInformacion())