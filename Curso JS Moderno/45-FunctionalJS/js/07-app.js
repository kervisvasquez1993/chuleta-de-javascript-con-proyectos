//funciones que retorna una funcion

const obtenerCliente = () => () => console.log('kervis vasquez');

const fn = obtenerCliente()
fn();