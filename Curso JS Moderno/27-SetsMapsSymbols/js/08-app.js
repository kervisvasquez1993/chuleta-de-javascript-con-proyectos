const ciudades = ['londres', 'new york', 'paris']
const ordenes = new Set([123,321,131,192])
const dats = new Map()
dats.set('ordenes', 'panes')
dats.set('ciudades', 'valencia')



for(keys of ciudades){
    console.log(keys)
}
for(keys of ordenes){
    console.log(keys)
}

for(keys of dats){
    console.log(keys)
}

//keys()
/*
for(keys of ciudades.keys()){
    console.log(keys)
}

for(keys of ordenes.keys()){
    console.log(keys)
}


for(keys of dats.keys()){
    console.log(keys)
}


//value
/*
for(value of ciudades.values()){
    console.log(value)
}

for(value of ordenes.values()){
    console.log(value)
}

for(value of dats.values()){
    console.log(value)
}


// entries 
/*

for(entry of ciudades.entries()){
    console.log(entry)
}


for(entry of ordenes.entries()){
    console.log(entry)
}


for(entry of dats.entries()){
    console.log(entry)
}

*/