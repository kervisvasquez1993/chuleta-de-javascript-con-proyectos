class Persona {
    constructor(nombre, email)
    {
        this.email  = email;
        this.nombre = nombre;
    }
}

class Cliente extends Persona{
    constructor(nombre,email,empresa)
    {   
        super(nombre,email)
        this.empresa = empresa
    }
}

const cliente = new Cliente('test','test@test.com','dynamics')
console.log(cliente)