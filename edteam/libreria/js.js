const myContent = document.getElementById('myConetent')
const ajax = request => {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest
        xhr.open(request.method, request.url, true)
        xhr.addEventListener('load', e => {
            resolve(e.target)
        }) 
        xhr.send()
    })
}

document.getElementById('btn').addEventListener('click', showMarvel)

const showMarvel = async () => {
    const hast = '71cb4c942cc81ab9a3cd72b5676fa9fe',
    const apiKey = '74880f01dd98d5144c8b9c0848d9f7cc'
    const r =  {
        method: 'GET',
        url : ''
    }
}