// console.log('Hello World! Desde el JS');

/// Leyendo HTML Desde JS usando el DOM

// seleccionamos las etiquetas con las que queremos trabajar 
const h1 = document.querySelector('h1');
// selecciona todos los p 
const p = document.querySelector('p');
const parrafoClass = document.querySelector('.parrafoClass');
const parrafoId = document.querySelector('#parrafoId');
const input = document.querySelector('input');

const getParrafoId = document.getElementById('parrafoId');

// console.log(h1);


// mostrando con {} el console.log, va a interpretar como si fuera un objeto y lo mostrará como tal 
// Si mostramos como objetos los elementos, vamos a poder ver sus propiedades 
console.log({
    h1,
    p,
    parrafoClass,
    parrafoId,
    input
}
)

console.log(getParrafoId);

// modificamos la etiqueta h1 - el innerHTML admite etiquetas ej: <br> 
h1.innerHTML = 'Manipulación del DOM <br> Modificacion desde el JS '

// si no deseamos que se pueda agregar etiquetas a nuestro codigo utilizamos innerText 

p.innerText = 'Actualizacion del parrafo con innerText <br>'

// accedemos al valor del atributo 
console.log(p.getAttribute('pantalla'));

p.setAttribute('pantalla', 'monitor');

p.setAttribute('class','ejemplo');

// agrego class y remuevo 
h1.classList.add('nuevoClass');
h1.classList.add('segundoNuevoClass');
h1.classList.remove('nuevoClass');

input.value = "123456"; // podemos indicar algun valor por defecto 

console.log(document.createElement('span'))


const img = document.createElement('img');
img.setAttribute('src','https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium')
p.appendChild(img)

