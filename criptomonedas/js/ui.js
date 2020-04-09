class Interfaz {
  mostarMensaje(msj, clases) {
    let div = document.createElement("div");
    div.className = clases;
    div.appendChild(document.createTextNode(msj));
    console.log(div);
  }
}
