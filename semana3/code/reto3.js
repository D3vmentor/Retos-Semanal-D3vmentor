/* Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada `filterByLength` que recibe un parámetro de entrada:

- array: Un array de strings con palabras

Dentro del cuerpo de la función `filterByLength` debes escribir tu solución.

Ejemplo 1: */

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]


const Words:["amor","sol","piedra","día"];

function filterByLength(array) {
    return array.filter(value=> value.length >= 4); 
}
// Danilo Peralta - Peruano - git: danilopb - danilo_peralta4@hotmail.com


function filterByLength(array){

const fourOrMor = array.filter( word => word.length >= 4);
return fourOrMor;
}