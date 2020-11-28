//namespace 
const restauranteApp = {}

restauranteApp.platillos = [
    {
        platillo: 'pizza',
        precio  : 25
    },
    {
        platillo: 'perros calientes',
        precio  : 1
    },
    {
        platillo: 'hamburguesa',
        precio  : 2
    },
]

restauranteApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log('bienvenido a nuestro menu')
        platillos.forEach((plato, i) => {
            console.log(`${i} : ${plato.platillo} $${plato.precio}`);
            
        });
    },
    ordenar : id => {
        console.log(`Tu platillo : ${restauranteApp.platillos[id].platillo} se esta preparando`)
    } 
}

//pasar argumento a la funcion
const { platillos } = restauranteApp
restauranteApp.funciones.mostrarMenu(platillos)