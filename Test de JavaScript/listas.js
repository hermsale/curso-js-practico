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

// convertir objeto en un array - segun sus valores

arrayObj = Object.values(obj);
arrayObj.forEach(element => {
    console.log(element)
});

/////// OBJETOS - acceder como array

// Tambien podemos encontrar elementos en un objeto de la siguiente forma (como si fuera un array)
const elementoObj = 'edad'; // guardamos un valor en la variable
console.log(obj[elementoObj]); // pasamos como si fuera un array con corchetes el elemento a buscar

// OBJETOS - REDUCCION DE CONDICIONAL - EJEMPLO /////// 

// Creamos un objeto con las opciones disponibles para una condicion - reemplazando a varios IF 
const tiposDeSuscripcion ={
    free:'Podes acceder a determinados cursos',
    basic:'Podes acceder a contenido pago',
    expert:'Podes acceder a contenido pago y una cartilla de ofertas laborales'
}

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripcion[suscripcion]){
        console.log(tiposDeSuscripcion[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripcion no existe');
}

conseguirTipoSuscripcion('asdsadsa');