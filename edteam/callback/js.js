const myContent = document.getElementById('myContent')
const setText = data => {
    myContent.textContent = data
}

const getData = callback => {
    setText('solizitando autorizacion')
    setTimeout( () => {
        callback(true)
    }, 2000)
}

const showData = callback => {
    setText('esperando a mostrar la informacion')
    setTimeout( () => {
        callback({ name : 'carlos'})
    },2000)
}

document.getElementById('btn').addEventListener('click', ()=> {
    getData(autorizacion => {
        if(autorizacion)
        {
            showData(user => {
                setText(user.name)
            })
        }
    })
})