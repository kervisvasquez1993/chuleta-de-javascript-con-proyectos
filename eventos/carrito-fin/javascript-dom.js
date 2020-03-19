let elemento;
elemento = document;
elemento = document.all; // html collation esto es lo que devuelve 
elemento = document.head
 
elemento = document.body
 
elemento = document.domain
elemento = document.URL
elemento = document.characterSet
elemento = document.forms
elemento = document.forms[0].id
elemento = document.forms[0].className
elemento = document.forms[0].classList
elemento = document.images
elemento = document.images[2]
elemento = document.images[2].src
elemento = document.images[2].getAttribute('src')
//script
//elemento = document.scripts
console.log(elemento)
// convertir html colletion en array
let imagenes = document.images
let imagenesArr = Array.from(imagenes)
imagenesArr.forEach( function(imagen){
   // console.log(imagen)

})


//selecionar elemento con js 
let oneElement = document.getElementById('hero')
oneElement = document.getElementById('hero').className 
let encabezado = document.getElementById('encabezado')
//acceder al contenido en de un elemento 
//let encabezado = document.getElementById('encabezado').textContent
//let encabezado = document.getElementById('encabezado').innerHTML

console.log(encabezado)

//domscripting 

encabezado.style.background = '#333'
encabezado.textContent = 'Cristo es el Señor '

// query selector nos permite selecionar como en css
let query = document.querySelector('#header')
console.log(query)
query.style.background = '#333'
//selecionanco multiples elemetos

const elemento1 = document.getElementsByClassName('enlaces')
 

console.log(typeof(elemento1))

let  links = document.getElementsByTagName('a')
enlacesss = Array.from(links)
enlacesss.forEach(function(link){
  console.log(link.textContent)
})


//selecionando multiples elemto con querysSelectorAll

let enlaces2 = document.querySelectorAll('.enlces')
console.log(enlaces2)

// traversing 
const navegacion = document.querySelector('#principal')
console.log(navegacion.children[0].children.textContent = 'Kervis vasquez')
//un nodo es todas las conexiones que tenemos en el DOM 
//nodeName devuelve etiqueta html
// nodeType regresa un numero 
// children para acceder a los hijos 

/**
 * 1 = elemento
 * 2 = atributo 
 * 3 = Text NOde
 * 8 = comentarios 
 * 9 = documentos
 * 10 = doctype
 * 
 * 
 */


 let curso = document.querySelectorAll('.curso')
 console.log(curso[0].lastElementChild)
 console.log(curso[0].childElementCount) // para contar cuantos elementos tengo
 let enlacesFinal = document.querySelectorAll('.enlace')
 console.log(enlacesFinal[0].parentElement)

 //crear elemento en js 

 const crear = document.createElement('a')

 // agregar clase 
 crear.className = 'enlaces'
 // agregar id 
 crear.id = 'enlaces-id'
 crear.setAttribute('href', '#')
 crear.textContent = "Cristo vive "
crear.appendChild(document.createTextNode('nuevo elemento'))
// agregarlo al html 
let html = navegacion.appendChild(crear)
html.style.background = "#3333"
console.log(html)

// reemplazar elemento 
const nuevoEncabezado = document.createElement('h2')

nuevoEncabezado.id = 'encabezado'

nuevoEncabezado.appendChild(document.createTextNode('Cristo vive'))

// elemto reemplazado

const anterior = document.querySelector('.titulo')
 const padre = anterior.parentElement
 padre.replaceChild(nuevoEncabezado,anterior )
 console.log(padre)


 //eliminar elemento
 enlacesFinal[0].remove()
// eliminar y agregar clases 
curso2 = document.querySelector('.curso')
let elem
elem = curso2.className
elem = curso2.classList.add('kervis')
elem = curso2.classList.remove('kervis')
elem = curso2.classList
// atributo
//elem = curso2.getAttribute('href')
//elem = curso2.setAttribute('href', 'http://google.com') // cambiarlo
//curso2.setAttribute('date-id',20)
// curso2.removeAttribute('data-id')
 elem = curso2.hasAttribute('data-id')
console.log(elem)