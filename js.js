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


    /*=========================
              tipo de datos
  ================================= */
  console.log('*======================TIPO DE DATOS ======================================')
  let valor
/*
  valor = 'cadena de texto'
  valor = 20 
  valor = true
  valor = null
  valor = undefined
  valor = {
    nombre: 'kervis'
  }*/
valor = 'kervis'
  console.log(typeof(valor))
  valor = 20
  console.log(typeof(valor))
  valor = true
  console.log(typeof(valor))
  valor = false
  console.log(typeof(valor))
  valor = null
  console.log(typeof(valor))

  //grupo de referencia o objeto

  valor = Symbol('simbolo')
  console.log(typeof(valor))
  valor = [1,2,3,4]
  console.log(typeof(valor))
  valor = {
    nombre: 'kervis'
  }
  console.log(typeof(valor))
  valor = new Date()
  console.log(typeof(valor))


  /*=============================================
          
  ==================================*/


const num1 = "50",
      num2 = 10,
      num3 = 'tres'
      console.log(Number(num1) + num2)
      console.log(parseInt(num1) - num2)

      let  dato 
      dato = Number("20")
      dato = Number("20.2020")
      dato = Number(true)
      dato = Number(false)
      dato = Number(null)
      dato = Number(undefined)
      dato = Number(20)
      dato = dato.toFixed(2)

      // ParseFloat y ParseInt
      dato = parseFloat("20")
      dato = parseInt("20")
      let cp 
      cp = 12345
      cp = String(cp)
      console.log(cp.length)


      /*===========================================
            template literal 
            ======================================*/

            const producto1 = 'coca cola',
                  precio = 30,
                  producto2 = 'helado',
                  precio2 = 20

                  let html 

                  html = `
                    <ul>
                      <li> Orden: ${producto1}</li>
                      <li> Precio: ${precio}</li>
                      <li> Orden: ${producto2}</li>
                      <li> Precio: ${precio2}</li>
                      <li> Total : ${total(precio,precio2)}</li>
                      </ul>
                      `
function total(a,b){
  return a + b 
}
document.getElementById('app').innerHTML = html;

/* ==============================================
    Arreglos 
    =============================================*/

    const arreglos = [1,2,3,4,5]
    console.log(arreglos)
    // arreglo de string

    const meses = new Array('enero','febrero','marzo')
console.log(meses)
console.log(Array.isArray(meses))// comprobar que un arreglo es un arreglo
meses.push('abril') // agrega al final

//buscar
console.log(meses.indexOf('febrero'))
//agrega al inicio del arreglo
meses.unshift('Mes 0')
console.log(meses)
//eliminar al final 
meses.pop()
// eliminar al inicio
meses.shift()
//metodo splice(incio,fin)
meses.splice()
//invierte el orden 
meses.reverse()
// unir arreglo con otros
 let nuevo = meses.concat(arreglos)
 console.log(nuevo)

 //ordenar un arreglo
 
 console.log(nuevo.sort())

 let arreglo1 = [2,33,45,9,1,15,17]
 console.log(arreglo1.sort(function(x,y){
   return x - y 
 }))



 /* ======================================================

    objeto en js 

    ===========================================*/

    const objeto = {
      nombre : 'KERVIS',
      edad : 29,
      apellido : 'VASQUEZ',
      profesion : 'PROGRAMADOR',
      email: 'kervisvasquez24@gmail.com',
      nacimiento : function(){
        return new Date().getFullYear() - this.edad
      }
    }
    console.log(objeto.nacimiento())


    // Arreglo de objeto

    const auto =[
      {

        modelo: 'aveo', motor:'1.0',
        
      },
      {
        modelo: 'camaro', motor:'2.0',
      },
      {
        modelo: 'chellen', motor:'4.0',
      }
    ]
    for (i = 0; i < auto.length; i ++){
      console.log( `
         El modelo de este aunto es ${auto[i].modelo}
         y tiene un motor de 
         ${auto[i].motor} 
        `
        )
    }

    /*==============funciones ===============*/
    //pasar valores dinamicamente a una funcion
   function saludar(nombre){
     console.log(`¿hola ${nombre} como estas ?`)
   }

   saludar('kervis')
   
   function saludar2(nombre = 'Visitante'){
       // if(typeof nombre === 'undefined' ){ nombre = 'SIN DEFINIR'}
        console.log( `hola ${nombre}`)
   }

   saludar2()

   //function expresion
     

   /*========== try catch=========0 */

   try{
    algo()
   } catch(error){
     console.log(error)
   }finally{
     console.log('no importa ejecurta el codigo')
   }


   obtenerClientes()
   function obtenerClientes(){
     console.log('descangando...')
     setTimeout(function(){
          console.log('completo')
     }, 3000 )
   }

   /**================iterando con un for================ */

   const pendientes = ['tareas','comer','proyecto']
    
   let a = pendientes.forEach(function(pendiente, index){
          console.log(`${index} ::: ${pendiente}`)
   }) 

  console.log(a)

  //Map para recorrer un arreglo de objeto

  const carrito = [
      {id: 1 , producto : 'libro'},
      {id: 2 , producto : 'libro2'},
      {id: 3 , producto : 'libro3'},
      {id: 4 , producto : 'libro4'},
      {id: 5 , producto : 'libro5'},
      {id: 6 , producto : 'libro6'},
  ]

  const nombreProducto = carrito.map(function(carrito){
        return carrito.producto
  })

  console.log(nombreProducto)

  const automoviles = {
    modelo : 'aveo',
    motor : 1.5,
    anio : 1999,
    marca : 'chevere'
  }

  for(let auto in automoviles){
    console.log(`${auto} : ${automoviles[auto]}`)
  }

  const pendiente2 = ['tarea','tarea2','tarea3','tarea4','tarea5']

    pendiente2.forEach( function(pendiente3, index){
        console.log(`${index}  =>  ${pendiente3}`)
    })
  console.log(pendiente2)

  /** iterando un arreglo de objeto */

  const carritoMap = [
    {id : 1 , producto : 'libro'},
    {id : 2 , producto : 'libro2'},
    {id : 3 , producto : 'libro3'},
    {id : 4 , producto : 'libro4'},
    {id : 5 , producto : 'libro5'},
  ]
  

  const productoMap = carritoMap.map(function(carrito5){
    return(carrito5.producto)
  })
  console.log(productoMap)

  /**================ iterando un objeto con for ===================== */

  const kervis = {
    edad : 27,
    sexo : 'masculino',
    trabajo : 'programador',
    novia : 'eliza'
  }


  for( let nasa in kervis){
    console.log(`${nasa} == ${kervis[nasa]}`)
  }