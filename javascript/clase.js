console.log("hola mundo", 2+2)

let nombre = "Jairo"

console.log(nombre)

let frutas = ["pera", "banano"]

console.log(frutas, nombre)

let numero = frutas.unshift("uvas")

console.log(frutas, numero)

const obtenernumeroaleatorio = () => {
    return new Promise((resolve, reject) => {
        const numero = Math.random();

        if(numero > 0.5){
            resolve(numero);}
        else{
            reject('El numero es menor o igual a 0.5');
        }
    });
};

const obtenerYmostrarNumeroAleatorio = async() => {

    try{
        const numero = await obtenernumeroaleatorio();
        console.log('numero obtenido', numero)
    }
    catch(error){
        console.log('ocurrio un error: ', error)
    }

}