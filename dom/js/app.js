let elemento = document
elemento = document.all[10]

elemento = document.head
elemento = document.domain
elemento = document.all[1]
elemento = document.URL
elemento = document.forms
elemento = document.forms[0].id
elemento = document.forms[0].className
elemento = document.forms[0].classList // return un DOMTokenList
elemento = document.forms[0].classList[2]
elemento = document.images
elemento = document.images[2]
elemento = document.images[2].getAttribute('src')
elemento = document.images
let imagenes = document.images
let imagenesArr = Array.from(imagenes) // convertir htmlcomllation en array

elemento = document.forms[0].classList
let elemetoArr = Array.from(elemento)
elemetoArr.forEach(arr => {
    //console.log(arr)
})

// console.log(typeof elemetoArr)

// selecionando element en el dom
//let encabezado = document.getElementById('encabezado')
//let encabezado = document.getElementById('encabezado').className
//encabezado = document.getElementById('encabezado').id
//encabezado = document.getElementById('encabezado').textContent
//encabezado = document.getElementById('encabezado').innerText // seleccionando text del elemeto seleccionado
//encabezado.style.background = '#333'
//encabezado.style.color = '#fff'
//encabezado.textContent = 'lOS MEJORES CURSOS' 
//console.log(encabezado)

const encabezado = document.querySelector('#encabezado')

encabezado.style.background = '#333'
encabezado.style.color = '#fff'

let enlaces = document.getElementsByClassName('enlace')
enlaces = enlaces[3]
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace')
let links = document.getElementsByTagName('a') // TagName es la etiqueta de html
links[18].style.background = 'red'
links[18].textContent = 'Nuevo enlaces'
enlaces = Array.from(links)
enlaces.forEach(enlace => {
    //console.log(enlace.textContent)
})

let links1 = document.querySelectorAll('#principal .enlace'); //NodeList
links1 = Array.from(links1) 
links1.forEach(link1 => {
  //  console.log(link1)
})
//console.log(links1)


// traversin con js 
const navegacion = document.querySelector('#principal')
//console.log(navegacion.children[0].nodeName)
console.log(navegacion.children[0].nodeType)
// 1 = elemento html
// 2 = atributo
// 3 = text Node
// 8 = comentario
// 9 = documents
// 10 = doctype

const enlacets = document.querySelectorAll('.enlace'),
cards = document.querySelectorAll('.card')
//console.log(enlacets[0].parentElement.parentElement)
//console.log(cards[0].parentElement.parentElement.children[0])



// ============================== crear elemto desde javascript =======================================

const crearElem = document.createElement('a')
// agregams clase

crearElem.className = 'enlace'
crearElem.id = 'nuevoId'
crearElem.setAttribute('href', '#')
//añadir text 
crearElem.textContent ='nuevo enlace desde js'

document.querySelector('#secundaria').appendChild(crearElem)
console.log(crearElem)

// ================================= reemplazar elemento ===============================================

const nuevoElemento = document.createElement('h2')
nuevoElemento.id = 'encabezado'

nuevoElemento.appendChild(document.createTextNode('los mejores cursos'))
// elemeto anterior sera remmplazado 
const anterior = document.querySelector('#encabezado')
const padre = document.querySelector('#lista-cursos')
// remmpaza yendo hacia el padre
padre.replaceChild(nuevoElemento,anterior)
console.log(anterior)




// ==================================== eliminar elemento con js ======================================


//   tomamos enlaces ya existentes enlaces
const enlaces2 = document.querySelectorAll('.enlace')
const navegacion2 = document.querySelector('#principal')
enlaces2[0].remove // elemento brado



const primerLi = document.querySelector('.enlace')
let element3

//obtenet una clase 

element3 = primerLi.className
element3 = primerLi.classList.add('nueva-clase')
element3 = primerLi.classList.remove('nueva-clase')
element3 = primerLi.classList
console.log(element3)