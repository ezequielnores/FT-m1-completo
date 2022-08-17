'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  //
  //180 /2 = 90
  //90 / 2 = 45
  //45 % 3 = 15
  //15 % 3 = 5
  //5 %  5 = 1

  
    var array = [1];
    var div = 2;
    
    while(num > 1){
    if(num % div === 0){
    array.push(div);
    num = num / div;
    }
    else{
        div++;
    }
    }
    return array
    
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++){
      if(array[i] >array[i+1]){
          var a = array[i];
          array[i] = array[i+1];
          array[i+1] = a;
      }   
  } 
}
return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
