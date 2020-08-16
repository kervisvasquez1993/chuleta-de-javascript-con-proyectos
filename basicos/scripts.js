
//=========================== metodos para string =========================

/*

let mensaje
mensaje = 'entonces dije buen curso'
mensaje = 'aprendiendo javascript, css y html para ser frontend'
console.log(mensaje.indexOf('javascript')) // para buscar parabra en js ==> devuelve un numero con la posicion
console.log(mensaje.substring(0,11)) // corta el texto primer parametro inicio segundo parametro final
console.log(mensaje.slice(0,11))
console.log(mensaje.split(' ')) // separar una cadena de texto, lo convierte en un arreglo 
console.log(mensaje.replace('css','php'))
console.log(mensaje.includes('css'))// es como indexOf pero te regresa un false
let tienda = `tienda `
console.log(tienda.repeat(5))
*/
/*

//============================ Metodos para numeros ================================= 

const   numero1 = 10,
        numero2 = 20,
        numero3 = 30.30,
        numero4 = .1020,
        numero5 = -3

let resultado
// suma 
resultado = numero1 + numero2
resultado = numero1 - numero2                          
resultado = numero1 / numero2
resultado = numero1 % numero2
// pi
resultado = Math.PI
resultado = Math.round(2.2)
resultado = Math.ceil(2.4)
resultado = Math.floor(2.4)
resultado = Math.sqrt(9) // sacar raiz cuadrada
resultado = Math.abs(numero5) // absoluto
resultado = Math.pow(8,3) // multiplicar a determinada potencia
resultado = Math.min(3,6,5,1,4)
resultado = Math.max(3,6,5,1,4)
resultado = Math.random()

let puntaje;
puntaje = 10
++puntaje  // asigna el valor antes de imprimirlo
puntaje++ // asiga el valor despues de imprimirlo
puntaje += 3
console.log(puntaje)
*/
/*
let tipo_dedatos;
// valores orimitivos
tipo_dedatos= 'kervis'
tipo_dedatos = 20
tipo_dedatos = 20.20
tipo_dedatos = -30
tipo_dedatos = "20"
tipo_dedatos = false
//fin de primitivo
// valores de referencia
tipo_dedatos = [1,2,3]
tipo_dedatos = {
    nombre    :   'kervis',
    profesion : 'programador'
}
tipo_dedatos = new Date()

console.log(typeof tipo_dedatos)
*/


//===================operadores de comparacion ==============================//
/*

const num1 = 20,
      num2 = 30,
      num3 = "20"

      console.log(num1 > num2)
      console.log(num1 < num2)
      console.log( num1 == num3)
      console.log( num1 === num3)
      console.log(num1 != num3)
      console.log('hola' == ' hola')
      console.log('z' > 'b' )
      console.log(null === undefined)

      */


      // =============================================  arreglo ===================================//

/*
      const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIR']
      console.log(Array.isArray(meses))
      console.log(meses)
      meses[4] = 'MAYO'
      meses.push('JUNIO')
      console.log(meses)
      //BUSCAR DATOS EN ARREGLO
      console.log(meses.indexOf('MAYO'))
      //AÑADIR AL INICIO DEL ARREGLO
      meses.unshift('mes 0')
      console.log(meses)

      // eliminar un elemento del arregl
      meses.pop()
      console.log(meses)

      //eliminar del principio

      meses.shift()
      console.log(meses)

      //quitar un rango
      meses.splice(2,1)
      console.log(meses)

      // revertir meses
      meses.reverse()
      console.log(meses)

      const arr1 = [1,2,3,4]
      const arr2 = [6,5,3,12,13,65,34]
      console.log(arr1.concat(arr2))

      const frutas = ['platanos', 'manzanas', 'fresas', 'naranja']
      // ordenar arreglo cn letras
      frutas.sort()
      console.log(frutas)
      //
      arr2.sort()
      console.log(arr2)
      // ordenar arreglo con numeros

      arr2.sort(function(a,b){
          return a - b
      })

      console.log(arr2)

      */


      //==================================== objetos =================================//

      const persona = {
          'nombre'    : 'kervis',
          'apellid'   : 'martinez',
          'profesion' : 'proframador',
          'edad'      : 26,
          'musica'    : ['Trance','ballenat','rock'],
          'ciudad'    : {
              'ciudad' : 'valencia',
              'pais'   : 'venezuela'
          },
          fechaCumple: function(){
              return new Date().getFullYear() - this.edad
          }
      }

     //arreglo de objetos

     const autos = [
         { modelo : 'carro1', motor : 'motor1' },
         { modelo : 'carro2', motor : 'motor2' },
         { modelo : 'carro3', motor : 'motor3' }
     ]

    autos[0].modelo = 'audi'
    //console.log(autos)

    //=============================================== funciones ==================================//

    // functin declaretion 

   // ================== for loop ====================

   for(let i = 0 ; i < 10 ; i++){
      // console.log(`numero: ${i}`)
   }

   const arreglo = ['camisa','pantalon','correa','gorra']
   for(let i = 0 ; i < arreglo.length; i++){
       console.log(arreglo[i])
   }

   // while 

   let i = 0
   while(i < 10 ){
       console.log(`numero: ${i}`)
       i++
       if( i === 5 ){
           console.log(' 5 es el numero')
           continue
           i++
       }
   }

   do{
       console.log(`numero: ${i}`)
       i++
   }
   while(i < 10)

   //foreach

   const pendientes = ['amar a eliza', 'limpiar la casa', 'estudiar', 'dormir']

   pendientes.forEach((pendiente, index) => {
       console.log(`${index} : ${pendiente}`)
   });

   // map para recorrer un arreglo

   const carrito = [
       {id: 1 , producto : 'camisa'},
       {id: 2 , producto : 'pantalon'},
       {id: 3 , producto : 'gorra'},
   ]

   const nombrePrducto = carrito.map(function(carrito){
            return `${carrito.id} : ${carrito.producto}`    
   })

   nombrePrducto.forEach( elemento =>{
    console.log(elemento)
   })

   const automoviles = {
       modelo : 'Camaron',
       motor : 6.1,
       año : 2010
   }
   for(let auto in automoviles){
       console.log(`${auto} : ${automoviles[auto]}`)
   }



   // ===========================   iteradores ===============================


   const ciudades = ['valencia', 'caracas', 'maturin']
   const rdenes = new Set ([123,345,567,789])
   const datos = new Map()
   datos.set('nombre','juan')
   datos.set('profesion', 'desarrollador web')

   // entrice iterador 

   for(let entradas of ciudades.entries()){
       console.log(entradas)
   }