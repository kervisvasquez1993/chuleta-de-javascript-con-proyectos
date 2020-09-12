import {Cliente} from './cliente.js'

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro),
        this.categoria = categoria
    }

    mostarInformacion(){
        return `èl cliente es ${this.nombre} y su saldo es ${this.ahorro} y su categria es ${this.categoria}`
    }
}