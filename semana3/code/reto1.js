/* 
Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3]
Output: [1, 1, -4, -6]

*/

const array = [1, 2, 3, 4 ,5]

function multiplyElements(array) {
    return array.map(value => value * 2);
}
// Danilo Peralta - Peruano - git: danilopb - danilo_peralta4@hotmail.com

// solucion 2

function multiplyElements(array) {

const newArray = array.map(elemnt => element * 2);
return newArray;
}