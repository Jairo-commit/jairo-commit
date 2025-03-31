// const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(baseURL).then(Response => Response.json()).then(datos => console.log(datos))



//forma de consumir api con async

// fetch api

// const fetchdata = async() => {
//     try{
//         const baseURL = 'https://rickandmortyapi.com/api/character/52';
//         const response = await fetch(baseURL)
//         const data = await response.json()
//         console.log(data)
// }catch(error){
//     console.log('Error: ', error)
// }}

// fetchdata();


// const baseURL = 'https://rickandmortyapi.com/';
// const endpoint = '/posts';
// const url = `${baseURL}${endpoint}`;

// fetch(url).then(Response => Response.json()).then(datos => console.log(datos))

// Metodo post
// const baseURL = 'https://jsonplaceholder.typicode.com/';
// const endpoint = 'posts';
// const url = `${baseURL}${endpoint}`;

// const data = {
//     title: 'mi post',
//     body: 'Contenido del post',
//     userId: 1
// };

// const options = {
//     method : 'POST',
//     headers: {
//         'content-Type': 'application/json'
//     },
//     body : JSON.stringify(data)
// };

// fetch(url, options).then((response) => response.json()).then((datos) => console.log(datos)).catch(error => console.log('Error: ', error));

// Metodo put
const baseURL = 'https://jsonplaceholder.typicode.com/';
const endpoint = 'posts/1';
const url = `${baseURL}${endpoint}`;

const data = {
    title: 'mi post edicion',
    body: 'Contenido del post',
    userId: 1
};

const options = {
    method : 'PUT',
    headers: {
        'content-Type': 'application/json'
    },
    body : JSON.stringify(data)
};

fetch(url, options).then((response) => response.json()).then((datos) => console.log(datos)).catch(error => console.log('Error: ', error));