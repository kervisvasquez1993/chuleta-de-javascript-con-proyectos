
let DB;
document.addEventListener('DOMContentLoaded', () =>{
    crmDB()
    
    setTimeout(()=>{
        crearCliente()
    }, 5000)
})

function crmDB(){
    // crear base de dats vs 1.0

    let crmDB = window.indexedDB.open('crm', 1) // crear una base de datos 

    // si hay error 
    crmDB.onerror = function() {
        console.log('hubo un error en la base de datos')
    }

    // si se crea bien 

    crmDB.onsuccess = function() {
        console.log('base de datos creada')
        DB = crmDB.result
        
    }

    // configuracion de base de datos 

    crmDB.onupgradeneeded = function(e){
        //console.log('este metodo solo de define una vez')
        const db = e.target.result
        console.log(db)

        const objectStora = db.createObjectStore('crm', { // para interactuar con la base de datos
            
            keyPath : 'crm',
            autoIncrement: true
        })
    
        //definir las columnas

        objectStora.createIndex('nombre', 'nombre', {unique: false})
        objectStora.createIndex('email', 'email', {unique: true})
        objectStora.createIndex('telefono', 'telefono', {unique: false})

    }   


}

function crearCliente(){
   
    
        let transancion = DB.transaction( ['crm'] , 'readwrite' ) // DB viene de souccess, para ejecutar la transaccion

        transancion.onclemplete = function(){
            console.log('transaccion completada')
        }

        transancion.onerror = function(){
            console.log('hub un error')
        }

        const objectStora = transancion.objectStora('crm')

        const nuevoCliente = {
            telefono : '12345',
            nombre    : 'JUan',
            email  : 'kervis123@gmail.com'
        }

        const peticion = objectStora.add(nuevoCliente)
    }