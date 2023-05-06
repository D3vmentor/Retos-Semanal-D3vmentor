/*2. Ordenar un array de objetos: Dado un array de objetos, escribir una función que ordene los objetos por una propiedad específica. Puedes utilizar el método sort() junto con una función de comparación para ordenar los objetos. */

const exampleOne = [
    { name: "Silfredo", age: 25 },
    { name: "Freddy", age: 30 },
    { name: "Jhon", age: 40 },
    { name: "Amanda", age: 23 }
];
  
function orderHandler(a, b) {
    // return a.age - b.age;
    return b.age - a.age;
}
  
const orderArrayOne = exampleOne.sort(orderHandler);
  
console.log(orderArrayOne);
  
