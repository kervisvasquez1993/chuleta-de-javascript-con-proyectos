
const cargarPost = document.getElementById('cargar')
cargarPost.addEventListener('click', cargarApi)

function cargarApi() 
{
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1/todos', true)
  	xhr.onload = function()
  	{
  		if(this.status === 200)
  		{
  			const respuestas = JSON.parse(this.responseText)
  			let htmlTemplate = ''
  			respuestas.forEach(function(respuesta)
  			{
  				htmlTemplate = 
  				`
  					<ul>
  						<li>id : ${respuesta.id}</li>
  						<li>titulo : ${respuesta.title}</li>
  						<li>verdadero o falso : ${respuesta.completed}</li>
  					</ul>
  				`
  				document.getElementById('listado').innerHTML += htmlTemplate
  			})
  		}
  	}	
  xhr.send()
}