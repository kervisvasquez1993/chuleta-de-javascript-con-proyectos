class Clientes {
  constructor(nombre, apellido, saldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo;
  }
  imprimirSaldo() {
    return `hola ${this.nombre}  ${this.apellido} tu saldo es de : ${this.saldo}`;
  }
  tipoCliente() {
    let tipo;
    if (this.saldo > 1000) {
      tipo = "gold";
    } else if (this.saldo > 500) {
      tipo = "platino";
    } else {
      tipo = "normal";
    }
    return tipo;
  }
  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const maria = new Clientes("maria", "vasquez", 2000);

console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());
console.log(Clientes.bienvenida());

//herencia
class Empresa extends Clientes {
  constructor(nombre, apellido, saldo, telefono, tipo) {
    //va hacia el constructor padre
    super(nombre, apellido, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
  }
  static bienvenida() {
    return `Bienvenido al cajero para empresa`;
  }
}

const empresa1 = new Empresa("Biodynamics", 10000, 58424444416, "medica");
console.log(empresa1.imprimirSaldo());

const empresa2 = new Empresa(
  "kerivsss",
  "vasquez",
  10000,
  04264444161,
  "desarrollo"
);
console.log(Empresa.bienvenida());
