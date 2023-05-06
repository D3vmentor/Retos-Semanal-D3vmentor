/*Dado un array de objetos con la estructura { nombre: 'string', edad: number }, escribe una función que calcule la edad media de los objetos cuyo nombre empiece por una letra determinada. Utiliza los métodos filter(), map() y reduce().*/ 


const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'María', edad: 35 },
    { nombre: 'Juan', edad: 40 },
    { nombre: 'Sara', edad: 45 },
      { nombre: "alvaro", edad: 30 }
  ];
  
  // Danilo Peralta - Peruano - git: danilopb - danilo_peralta4@hotmail.com
  function edadMedia(persons, letter) {
          let personsFilter = persons.filter(person => {
          return person.nombre[0].toLowerCase() === letter.toLowerCase();
      });
      let sum = personsFilter.reduce((accumulator, person) => {
              return accumulator + person.edad 
          }, 0);
      return sum / personsFilter.length;
  }
  
  console.log(edadMedia(personas, 'M')); // Output: 35
  
  function edadMedia(personas, letra) {
    const filtrados = personas.filter(p => p.nombre[0].toUpperCase() === letra.toUpperCase());
    if (filtrados.length === 0) return 0;
    const edades = filtrados.map(p => p.edad);
    const sumaEdades = edades.reduce((a, b) => a + b, 0);
    return sumaEdades / filtrados.length;
  }