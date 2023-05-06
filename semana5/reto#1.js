/*1. Eliminar elementos duplicados: Dado un array, escribir una función que elimine los elementos duplicados y devuelva un nuevo array sin los elementos duplicados. Puedes utilizar el método filter() en combinación con indexOf() para eliminar los elementos duplicados. */

const array1 = [1, 2, 3, 3];
const array2 = [1, 2, 2, 2, 2, 3, 4]
function eliminarDuplicados(array){
	return array.filter((item, index) => array.indexOf(item) === index);
}

//Freddy Cordoba Solucion 

const exampleTwo = [1, 2, 2, 2, 2, 3, 4];
const setExampleTwo = new Set(exampleTwo);
const arrayExampleTwo = Array.from(setExampleTwo);