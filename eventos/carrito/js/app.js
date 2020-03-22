const carrito = document.getElementById('carrito'),
      cursos = document.getElementById('lista-cursos'),
      listaCurso = document.querySelector('#lista-carrito tbody'),
      vaciarCarrito = document.getElementById('vaciar-carrito')

      // listener
      cargarAddEventListener()


      function cargarAddEventListener()
      {
          cursos.addEventListener('click', comprarCursos )
          // cuando se elimina el curso del carrito
          carrito.addEventListener('click', eliminarcurso)

          // vaciar carrito
          vaciarCarrito.addEventListener('click', vaciarCarritoBtn)

          // mostrar localstorage

          document.addEventListener('DOMContentLoaded' , leerLocalStorage)
        }


      //funcionessss 


      function comprarCursos(e){
          e.preventDefault()
          // delagacion para agregar al carrito
          if(e.target.classList.contains('agregar-carrito'))
          {
              const  curso = e.target.parentElement.parentElement
              
              leerDatosCursos(curso);  
            
          }
      }


      // leer datos cursos 

      function leerDatosCursos(curso)
      {
                const infoCurso = {
                    imagen :  curso.querySelector('img').src,
                    titulo : curso.querySelector('h4').textContent,
                    precio : curso.querySelector('.precio span').textContent,
                    id : curso.querySelector('a').getAttribute('data-id')
                }

                insertarCarrito(infoCurso)
      }

      // muestra el curso selecionado ene l carrito

      function insertarCarrito(curso)
      {
         const row = document.createElement('tr')
         row.innerHTML = `
            <td>
                <img src="${curso.imagen}">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X</a>

            </td>
         `
         listaCurso.appendChild(row)
       
       
         guardarCursoLocalStorage(curso)
        
         // guardar curso localStorage

      }


      // elimina el curso del carrito en el dom
      function eliminarcurso(e)
      {
          e.preventDefault
          let curso,
              cursoId

          if(e.target.classList.contains('borrar-curso'))
          {
              e.target.parentElement.parentElement.remove()
              curso = e.target.parentElement.parentElement
              cursoId = curso.querySelector('a').getAttribute('data-id')
             
          }

          //eliminarCursoLs(curso)
          eliminarCursoLs(cursoId)
          
      }

      // vaciar carrito 

      function vaciarCarritoBtn()
      {
        //forma mas lenta
        listaCurso.innerHTML = ''

        //forma lenta
        while(listaCurso.firstChild)
        {
            listaCurso.removeChild(listaCurso.firstChild);
        }

        

        // vaciar local storage 

        vaciarLocalStorage()
        return false
      }


      // alamacena curso en localstorage
      function guardarCursoLocalStorage(curso)
      {
          
        let cursos
        // tomar el valor de un arreglo en ls o si esta vacio
        cursos = obtenerCursoLocalstorage()
        // el curso selecionado se agrega al carrito
        cursos.push(curso)
        // insertar cursos al localstorage
        localStorage.setItem('cursos',JSON.stringify(cursos))
      }
     
     
      //comprobar que hy curso en localstorage
      function obtenerCursoLocalstorage(){
        let cursosLs    
        if(localStorage.getItem('cursos') === null)
        {
            cursosLs = []
        
        }
        else
        {
            cursosLs = JSON.parse(localStorage.getItem('cursos'))
        }

        return cursosLs
      }


//imprime los curso de local storage

function leerLocalStorage()
{
    let cursosLs
    cursosLs = obtenerCursoLocalstorage()
    cursosLs.forEach(function(curso)
    {
        // construir el template
        const row = document.createElement('tr')
         row.innerHTML = `
            <td>
                <img src="${curso.imagen}">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X</a>

            </td>
         `
         listaCurso.appendChild(row)
       
    })
}
// eliminar por el id
function eliminarCursoLs(curso)
{
    let cursosLs
    cursosLs = obtenerCursoLocalstorage()
   
    cursosLs.forEach(function(cursosLocal, index)
    {
        if(cursosLocal.id === curso)
        {
            cursosLs.splice(index, 1)
        }
        
    })
    localStorage.setItem('cursos', JSON.stringify(cursosLs))
}

// elimina todo los curso del localstorage

function vaciarLocalStorage()
{
    localStorage.clear()      
}