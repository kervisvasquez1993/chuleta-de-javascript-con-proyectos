localStorage.removeItem('nombre')

// actualizar del localstrage 

const mesesArray = JSON.parse( localStorage.getItem('meses') )
console.log(mesesArray)

mesesArray.push('nuevo mes')
localStorage.setItem('meses', mesesArray)

// localstorage.clear()