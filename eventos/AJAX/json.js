/*const boton1 = document.getElementById('cargar2')

boton1.addEventListener('click', agregar)

function agregar(){
	const xhr = new XMLHttpRequest()

	xhr.open('GET','datos.json',true)
	xhr.onload = function()
	{
		if(this.status === 200)
		{
			const persona = JSON.parse(this.responseText)
			const htmlTemplate = `
			<ul>
			<li>ID : ${persona.id}</li>
			<li>NOMBRE : ${persona.nombre}</li>
			<li>EMPRESA : ${persona.empresa}</li>
			<li>TRABAJO : ${persona.trabajo}</li>
			</ul>
`
		document.getElementById('listado').innerHTML = htmlTemplate
		}
	}
	xhr.send()
}*/

const boton1 = document.getElementById('cargar2')

boton1.addEventListener('click', agregar)

function agregar(){
	const xhr = new XMLHttpRequest()

	xhr.open('GET','datos.json',true)
	xhr.onload = function()
	{
		if(this.status === 200)
		{	
			let htmlTemplate = ''
			const personas = JSON.parse(this.responseText)
			personas.forEach(function(x)
			{
			htmlTemplate += 
                        //+= para concatenar elementos del json
                        `<ul>
			<li>ID : ${x.id}</li>
			<li>NOMBRE : ${x.nombre}</li>
			<li>EMPRESA : ${x.empresa}</li>
			<li>TRABAJO : ${x.trabajo}</li>
			</ul>`
			})
			document.getElementById('listado').innerHTML = htmlTemplate
		}
	}
	xhr.send()
}
