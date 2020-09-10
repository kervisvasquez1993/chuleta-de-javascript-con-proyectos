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

const kervis = new Client('kervis', 6000)
kervis.tipoCliente() // agregams el prototipe al elemento instanciado
console.log(kervis.nombreSaldoCliente())
kervis.retiraSaldo(2000)
console.log(kervis.nombreSaldoCliente())
console.log(kervis)