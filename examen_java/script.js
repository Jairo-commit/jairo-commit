const obtenerValorInput = () => {
    let name = document.getElementById('name');
    let status = document.getElementById('status')
    let gender = document.getElementById('gender')
    peticionApi(name.value, status.value, gender.value);
}

const peticionApi = (name, status, gender) =>{
    const baseURL = 'https://rickandmortyapi.com/api/character/';
    const endpoint = `?name=${name}&status=${status}&gender=${gender}`;
    const url = `${baseURL}${endpoint}`;

    axios.get(url).then(res => console.log(res.data))
    .catch(err => console.log(err));

    axios.get(url).then(res => printData(res.data))
    .catch(err => console.log(err));
} 

const printData = (data) => {
    let response = document.getElementById('show-info');
    response.innerHTML = data.results.map(item => `<li>${item.name} - ${item.status} - ${item.gender}</li>`).join('');
}