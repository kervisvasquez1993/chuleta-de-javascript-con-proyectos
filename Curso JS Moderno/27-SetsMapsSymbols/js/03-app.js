const map = new Map()
map.set('nombre', 'kervis')
map.set('tipo', 'programador')
map.set('saldo', 3000)

console.log(map)
console.log(map.size)
console.log(map.has('nombre'))
console.log(map.get('nombre'))
console.log(map.delete('nombre'))
console.log(map)
console.log(map.clear)
console.log(map)

const map2 = new Map([ ['nombre', 'kervis'], ['tipo de paciente', 'con covid-19'] ])
console.log(map2)


map
