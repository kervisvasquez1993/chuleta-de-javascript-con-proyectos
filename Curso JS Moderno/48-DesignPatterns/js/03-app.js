let instancia = null 

class Persona {
    constructor(nombre, email)
    {

        if(!instancia)
        {
          this.email  = email;
          this.nombre = nombre;
          instancia  = this;
        }
        else{
            return instancia;
        }
    }
}

class Cliente extends Persona{
    constructor(nombre,email,empresa)
    {   
        if(!instancia)
        {
        super(nombre,email)
        this.empresa = empresa
        }
        else{
            instancia = this
        }
    }
}

const cliente = new Cliente('test','test@test.com','dynamics')
console.log(cliente)
const cliente2 = new Cliente('test2','test2@test.com','dynamics')
console.log(cliente2)