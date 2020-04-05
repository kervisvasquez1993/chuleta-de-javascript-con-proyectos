const esperando = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('se ejecuto')

    },5000)
}) // dos parametros

esperando.then(function(mensaje){
    console.log(mensaje)
}) // resolve es cuando se cumple la promesa
                   // then  espera que resolve se cumpla 

// reject

const aplicarDescuento = new Promise(function(resolve,reject){
    const descuento = false
    if(descuento)
     {
         resolve('descuento aplicado')
     }
     else
     {
         reject('no se plico el descuento')
     }
})

aplicarDescuento.then(function(resultado){
    console.log(resultado)
}).catch(function(error){
    console.log(error)
})
