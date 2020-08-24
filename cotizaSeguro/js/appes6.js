// cotizador constructor para seguro
class Seguro {
    constructor(marca,anio,tipoSeguro)
        {
          this.marca = marca
          this.anio = anio
          this.tipoSeguro = tipoSeguro
        }

    cotizarSeguro(){
        // marcas 
        // 1 = americano 1.15
        // 2 asiatico 1.05
        // 3 = europeo 1.35
        let cantidad
        const base = 2000
    
        switch(this.marca){
            case '1' :
                cantidad = base * 1.15
                break
            case '2' :
                cantidad = base * 1.05
                break    
            case '3' :
                cantidad = base * 1.35
                break    
        }
    
        // leer el año 
        const diferencia = new Date().getFullYear() - this.anio
    
        // cantidad que se debe de pagar 
        cantidad -= ((diferencia*3)*cantidad) / 100
    
        // si el seguro es basico se multiplica por 30 mas 
        // si es completo 50%
        if(this.tipoSeguro === 'basico'){
            cantidad *= 1.30
        }else{
            cantidad *= 1.50
        }
        return cantidad
    }
    
}


// todo lo que se muestra
class  Interzas{

    // mensaje que se imprime en el html
    mostrarError(mensaje, tipoSeguro){
        const div = document.createElement('div')
        if(tipoSeguro === 'error'){
            div.classList.add('mensaje', 'error') 
        }else{
            div.classList.add('mensaje', 'error-test')
        }
        div.innerHTML = `${mensaje}`
        formulario.insertBefore(div, document.querySelector('.form-group'))

        setTimeout(function(){
                document.querySelector('.mensaje').remove()
        }, 3000)
    }

    mostraResultado(seguro, total){
        const resultado = document.getElementById('resultado')
        let marca
       switch(seguro.marca){
           case '1':
               marca = 'Americano'
               break
            case '2':
             marca = 'Asiatico'
             break
             
            case '3':
               marca = 'Europeo'
               break
       }
    
       const div = document.createElement('div')
       div.innerHTML = `
         <p class="header"> Tu resumen: </p>
         <p>Marca: ${marca},</p>
         <p>Año: ${seguro.anio},</p>
         <p>Tipo de Seguro: ${seguro.tipoSeguro}, </p>
         <p>Total: ${total}</p>
       `
    
       resultado.appendChild(div)
    
    }
}
// imprime el resultado de la cotizacion



//event listener
const formulario = document.getElementById('cotizar-seguro')

formulario.addEventListener('submit', (e)=> {
   e.preventDefault()
    // leer la marca seleccionada del select
   const marca = document.getElementById('marca')
   const marcaSelecionada = marca.options[marca.selectedIndex].value
   
   
   //leer el año selecionado
   const anio = document.getElementById('anio'),
         anioSelecionado = anio.options[anio.selectedIndex].value
         

    // leer el valor del radio butom
    const tipoRadio = document.querySelector('input[name="tipo"]:checked').value

    // instacia de interfaz
    
    
    
    
    
    
    const interfaz = new Interzas()

    // revisams que los campos no estan vacios

    if(marcaSelecionada === '' || anioSelecionado === '' || tipoRadio === '' ){
        interfaz.mostrarError('Faltan datos, revise el formulario y pruebe de nuevo')
    }else{

        const resultado = document.querySelector('#resultado div')
       
        if(resultado != null){
           resultado.remove()
        }
        const seguro = new Seguro(marcaSelecionada, anioSelecionado, tipoRadio)
       // cotizar el seguro 
       const cantidad = seguro.cotizarSeguro()
       
       
       interfaz.mostraResultado(seguro, cantidad)
    }

})



const max = new Date().getFullYear(),
min = max -20,
selecionarAnio = document.getElementById('anio')

for(let i = max ; i >=  min; i--){
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    selecionarAnio.appendChild(option)

}