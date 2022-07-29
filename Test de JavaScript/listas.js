// listas - arrays - objetos 

// listas: es un conjunto de elementos 

// array: es una lista de elementos - Pueden ser de distintos tipos de datos.
const arrayDeElementos = [1,"nombre",true,"perro"];

function imprimirArray(){
    // recorro el array con forEach
    arrayDeElementos.forEach(element => {
        console.log(element)
    });

    // recorro con un map 
    const nuevoArray = arrayDeElementos.map((element2)=>{
        console.log(element2)
    })
}

imprimirArray(arrayDeElementos);

// Objeto: es una lista de elementos - Pero cada elemento tiene un nombre clave 
const obj = {
    nombre: 'Alejandro',
    edad : 31,
    comidasFavoritas: ['asado','pastas'],
};

console.log(obj);
// mostramos los nombre clave 
// console.log(Object.keys(obj));

