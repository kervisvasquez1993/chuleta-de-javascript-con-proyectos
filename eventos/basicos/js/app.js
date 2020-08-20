// delegacion de eventos

document.body.addEventListener('click', (e) => {
  e.preventDefault()
  
 // console.log(e.target.classList)
  if(e.target.classList.contains('borrar-curso')){
    console.log(e.target.parentElement.parentElement.remove()) //eliminar element del carrito 
  }
  if(e.target.classList.contains('agregar-carrito')){
    console.log('curso agregado') //eliminar element del carrito 
  }
})

