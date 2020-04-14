const iu = new Interfaz();

// leer formulario
const formulario = document.querySelector("#formulario");
//evento
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // leer moneda seleccionada
  const moneda = document.querySelector("#moneda");
  const monedaSelec = moneda.options[moneda.selectedIndex].value; // seleccionar opciones
  const criptomoneda = document.querySelector("#criptomoneda");
  const criptSelect = criptomoneda.options[criptomoneda.selectedIndex].value;
  //comprobar que ambos esten seleccionado
  if (criptSelect === "" || monedaSelec === "") {
    iu.mostarMensaje("prueba", "alert");
  } else {
    console.log("todo bien");
  }
});
