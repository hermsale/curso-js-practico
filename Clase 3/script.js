const inputCalculo1 = document.querySelector('#inputCalculo1'); 
const inputCalculo2 = document.querySelector('#inputCalculo2'); 
const resultCalculo = document.querySelector('#result')

// elemento de formulario 
const form = document.querySelector('#idForm');

const btn = document.querySelector('#btnCalcular');

// AddEventListener necesita que le pasemos por parametro el evento que va a estar escuchando, y la función a ejecutar
// btn.addEventListener('click',btnCalculo);

form.addEventListener('submit',btnCalculo);

function btnCalculo(event){
   event.preventDefault(); // cancelamos la recarga predeterminada 
   const resultado = (+inputCalculo1.value + +inputCalculo2.value);
   resultCalculo.innerHTML = "El resultado de la suma es " +resultado;
}
