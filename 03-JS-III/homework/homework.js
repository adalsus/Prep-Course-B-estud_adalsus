// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

//ESTUDIANTE: adalsus
function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let totaliza=0;
    for (let serie=1; serie<=10; serie++) {
        totaliza += serie;
    }
    return totaliza;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let arrayPares=[];
  let indice=-1;
  for (let elemento of array) {
      ++indice;
       if (elemento%2===0) {
          arrayPares.push(array[indice]);
      }
  }
  return arrayPares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arrayAlCuadrado = array.map(
          function (elemento) {
            return Math.pow(elemento,2);
         }
  );
  return arrayAlCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let totaliza=0;
  for (let elemento of array) {
      totaliza += elemento;
  }
  return totaliza;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return (num+'').length;
}
//ESTUDIANTE: adalsus  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
