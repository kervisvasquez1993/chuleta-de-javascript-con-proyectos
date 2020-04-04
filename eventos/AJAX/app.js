let cargar = document.getElementById("cargar")
cargar.addEventListener("click", cargarDatos);
function cargarDatos() {
  //CREAR EL OBJETO XMLHTTPREQUEST
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "datos.txt", true);
  
  //ABRIR CONEXION
 
 xhr.open("GET", "datos.txt", true);
  //una vez que cargue
/*
  xhr.onload = function() {
    //revisamos el stado de la peticion 200, 403, 404
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };*/

//onreadystatechange

xhr.onreadystatechange = function(){
	// no inicializado
// 1 conexion establecida
// 2 recibida
// 3 procesando
// 4 respuesta limpia 
console.log(` estado ${this.readyState}`)
if(this.readyState === 4 && this.status === 200){
	
	console.log(this.responseText)
}

}
 
  xhr.send();
console.log(xhr)
}
