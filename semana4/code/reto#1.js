/*1. Dado un array de números, escribe una función que calcule la suma de los elementos pares y la multiplique por la suma de los elementos impares. Utiliza los métodos filter(), reduce() y forEach(). */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Danilo Peralta - Peruano - git: danilopb - danilo_peralta4@hotmail.com

function sumaMult(numeros) {
	let sumEven = 0;
	let sumOdd = 0;
	numeros.foreach((number) => {
			number % 2 === 0 ? sumEven + number : sumOdd + number; 
	});
	return sumEven * sumOdd;
}

// Second solución
function sumaMult(numeros) {
	const pares = numeros.filter(numb => % 2 === 0);
	const impar = numeros.filter(numb => % 2 !== 0);
	const sumaPres = pares.reduce((a, b) => a + b, 0);
	const sumaImpares = impar.reduce((a, b) => a + b, 0);
	return sumaPres * sumaImpares; 
	
}

console.log(sumaMult(numeros)); // Output: 945