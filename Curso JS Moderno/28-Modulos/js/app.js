import { nombre, ahorro, mostarInformacion, tieneSaldo, Cliente  } from "./cliente.js";
import {Empresa} from './empresa.js'


console.log(nombre)
console.log(ahorro)

mostarInformacion(nombre,ahorro)

tieneSaldo(ahorro)




const cliente = new Cliente('kervis', 20000)
console.log(cliente.mostarInformacion())

const empresa1 = new Empresa('udemy', 2000, 'aprendizaje')
console.log(empresa1.mostarInformacion())