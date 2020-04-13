const myContent = document.getElementById('myContent')
const setText = data => {
    myContent.textContent = data
}

const getData = () => {
    return new Promise((resolve,reject) => 
    {
      setText('solizitando autorizacion')
      setTimeout( () => {
          resolve(true)
      }, 2000)
    })
}

const showData = () => {
    return new Promise((resolve,reject) => {
    setText('esperando a mostrar la informacion')
    setTimeout( () => {
        resolve({ name : 'carlos'})
    },2000)
    })
}

document.getElementById('btn').addEventListener('click', async ()=> {
   let user = {}
    const autorizacion = await getData()
   if(autorizacion)
     {
        user = await showData()
     }
    setText(user.name)
    })