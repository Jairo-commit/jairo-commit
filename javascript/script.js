// const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(baseURL).then(Response => Response.json()).then(datos => console.log(datos))



//forma de consumir api con async

// fetch api

const fetchdata = async() => {
    try{
        const baseURL = 'https://rickandmortyapi.com/api/character/52';
        const response = await fetch(baseURL)
        const data = await response.json()
        console.log(data)
}catch(error){
    console.log('Error: ', error)
}}

fetchdata();