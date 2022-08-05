const inputCalculo1 = document.querySelector('#inputCalculo1'); /// lectura de ID
const inputCalculo2 = document.querySelector('#inputCalculo2'); 
// const btn = document.querySelector('#btnCalcular');// lectura de CLASS
const resultCalculo = document.querySelector('#result')


function btnCalculo(){
   // volvemos Int los valores que recibimos
   // const resultado = parseInt(inputCalculo1.value) + parseInt(inputCalculo2.value);
   // estas es otra forma de pasar el valor string a  Int 
   const resultado = (+inputCalculo1.value + +inputCalculo2.value);
console.log("el resultado es "+resultado);
//  concatenamos al parrafo lo siguiente. Podemos usar cualquiera de las dos formas
   resultCalculo.innerHTML = "El resultado de la suma es " +resultado;
   // resultCalculo.innerText = "El resultado de la suma es " +resultado;
}


