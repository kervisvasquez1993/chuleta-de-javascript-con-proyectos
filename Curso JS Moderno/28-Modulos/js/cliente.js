export const nombre = 'kervis'
export const ahorro = 2000

export function mostarInformacion(nombre, ahorro){
    console.log(`${nombre} y sus ahorro son: ${ahorro}`)
}

export function tieneSaldo(saldo){
    if(saldo > 1000 ){
        console.log('tiene mas de 1000')
    }else{
        console.log('tiene menos de mil')
    }
}


export class Cliente {
    constructor(nombre, ahorro){
        this.ahorro = ahorro,
        this.nombre = nombre
    }
    mostarInformacion(){
        return `èl cliente es ${this.nombre} y su saldo es ${this.ahorro}`
    }
}