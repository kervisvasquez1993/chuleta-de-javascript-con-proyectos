const carrito = document.getElementById('carrito'),
      cursos = document.getElementById('lista-cursos'),
      listaCurso = document.querySelector('#lista-carrito tbody')

      // listener
      cargarAddEventListener()


      function cargarAddEventListener()
      {
          cursos.addEventListener('click', comprarCursos )
          // cuando se elimina el curso del carrito
          carrito.addEventListener('click', eliminarcurso)
      }


      function comprarCursos(e){
          e.preventDefault()
          // delagacion para agregar al carrito
          if(e.target.classList.contains('agregar-carrito'))
          {
              const  curso = e.target.parentElement.parentElement
              console.log(curso)
              leerDatosCursos(curso);  
            
          }
      }


      // leer datos cursos 

      function leerDatosCursos(curso){
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
      }


      // elimina el curso del carrito en el dom
      function eliminarcurso(e){
          e.preventDefault
          let curso
          if(e.target.classList.contains('borrar-curso'))
          {
              e.target.parentElement.parentElement.remove()
          }

      }