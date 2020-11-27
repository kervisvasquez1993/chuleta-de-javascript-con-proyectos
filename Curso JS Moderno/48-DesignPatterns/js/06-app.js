// mixin patter es una forma de agregar funciones a una clase cuando ya a sido creada
class Persona {
    constructor(nombre, email)
    {
        this.email  = email;
        this.nombre = nombre;
    }
}

class Cliente 
{
    constructor(nombre, email)
    {
        this.email  = email;
        this.nombre = nombre;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona ${this.nombre} Email: ${this.email}`);
    },
    mostraNombre(){
        console.log(`el nombre de la persona es ${this.nombre}`)
    },
    
}
//añadir funciones de persona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona)

const persona = new Persona('kervis', 'test@test.com');
persona.mostrarInformacion();
persona.mostraNombre();
console.log("<======================>");
const cliente = new Cliente('cliente1','correo@correo.com')
cliente.mostraNombre()
