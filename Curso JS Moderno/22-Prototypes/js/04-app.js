function Client(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

// ls prototype son metodos en clases
Client.prototype.tipoCliente = function(){  // function busca el el bjeto actual   
    let tipo

    if (this.saldo > 10000) {

        tipo = 'GOLD'
        
    }else if(this.saldo > 5000){
        tipo = 'Platino'
    }
    else{
        tipo = 'Normal'
    }
    return tipo
}

Client.prototype.nombreSaldoCliente = function(){
    return `Nombre: ${this.nombre}, su saldo es ${this.saldo} y su tipo de cliente es ${this.tipoCliente()}`
}


Client.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}


function Persona(nombre, saldo, telefono){
    Client.call(this, nombre, saldo)
    this.telefono = telefono
}

Persona.prototype = Object.create(Client.prototype) // object create es para copiar el prototype

// instanciar

const juan = new Persona('juan', 7000, 1234567678 )
console.log(juan.nombreSaldoCliente())