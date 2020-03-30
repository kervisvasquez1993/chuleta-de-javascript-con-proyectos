document.getElementById("cargar").addEventListener("click", cargarDatos);
function cargarDatos() {
  //CREAR EL OBJETO XMLHTTPREQUEST
  const xhr = new XMLHttpRequest();
  //ABRIR CONEXION
  xhr.open("GET", "datos.txt", true);
  //una vez que cargue
  xhr.onload = function() {
    //revisamos el stado de la peticion 200, 403, 404
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}
