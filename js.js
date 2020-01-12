/*--------------------------
    VARIABLES
  --------------------------- */
// forma de crear variables
// var let const
var nombre = 'esto es una variable con var'
let nombre2 = 'kervis'
let nombre1 
 const constante = 'constante'
nombre1 = 'vasquez'

nombre = 'kervis vasquez antonio'

console.log('*----------------------OPERACIONES CON STRING-----------------*')
//fin de variable
/*--------------------------
    string o cadena de texto
  --------------------------- */
 // metodos solo para cadenas de texto
  let nombreCompleto = 'kervis vasquez',
        mensaje = 'Aprendiendo js con html css'
  console.log(nombreCompleto.length) // para ver la longitud del string
  console.log(nombreCompleto.concat(' ','es su nombre')) // concatenar valor
  console.log(nombreCompleto.toUpperCase()) // convierte el string en mauscula
  console.log(nombreCompleto.toLocaleLowerCase()) // convierte el string en minuscula
  console.log(mensaje)
  console.log(mensaje.indexOf('js')) // busca lo que le pases en el parentesis en el mensaje original "-1" cunado no encuentra el valor
  console.log(mensaje.substring(0,10))// corta los caracteres de un string ('inicio','fin')
  console.log(mensaje.slice(0,10))
  console.log(mensaje.split(' ')) // convierte un string en un array de acuerdo al parametro que uno le pase
  console.log(mensaje.replace('js','PHP')) // reemplaza un valor 
  console.log(mensaje.includes('js'))// devuelve true o false
  console.log(nombre.repeat(4))
  //fin de variable
/*--------------------------
    OPERACIONES CON NUMEROS
  --------------------------- */
  console.log('*----------------------OPERACIONES CON NUMEROS-----------------*')
const numero1 = 30,
    numero2 = 20,
    numero3 = 20.20
    numero4 = .1020
    numero5 = -3

let resultado ;
    resultado = numero1 + numero2
    console.log(resultado)
    resultado = numero1 - numero2
    console.log(resultado)
    resultado = numero1*3
    console.log(resultado)
    resultado = numero1 / numero2
    console.log(resultado)
    resultado = numero1 % numero2
    console.log(resultado)

    //pi
    resultado = Math.PI
    console.log(resultado)
    resultado = Math.round(2.4)
    console.log(resultado)
    resultado = Math.ceil(2.4) // redondea hacia arriba 
    console.log(resultado)
    resultado = Math.floor(2.4) // redondea hacia abajo
    console.log(resultado)
    resultado = Math.sqrt(144)// raz cuadrada
    console.log(resultado)
    resultado = Math.abs(numero5)
    console.log(resultado)
    resultado = Math.pow(8,3) // elevar a una potencia
    console.log(resultado)
    resultado = Math.min(3,4,56,78,1)//
    console.log(resultado)
    resultado = Math.max(3,4,56,78,1)//
    console.log(resultado)

    resultado = Math.random()
    console.log(resultado)
    let puntaje = 10
    console.log(++puntaje)
    console.log(puntaje++)
    puntaje += 3
    console.log(puntaje)

