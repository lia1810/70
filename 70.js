// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// playlist.forEach(canciones => {
//     console.log(canciones)
// });
// const librosDeJS = [
//     'JavaScript for Kids: A Playful Introduction to Programming',
//     'Composing Software',
//     'Eloquent JavaScript: A Modern Introduction to Programming',
//     'JavaScript: The Good Parts',
//     'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//     'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//     'JavaScript: The Definitive Guide',
//     'You Don’t Know JS',
//     'JavaScript Allongé: The Six Edition'
// ];
// let totalLibros = ``
// librosDeJS.forEach(libros => {
//    totalLibros ++

// });
// console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros')


// const numbers = [6, 1, 34, 94, 3, 17];
// let sum = 0;
// numbers.forEach(numero => {
//     sum += numero
// });
// console.log(sum)


// let temas = ``
// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// playlist.forEach((canciones,indice) => {
//     temas += `- ${indice} - ${canciones}
//     `
// });
// console.log(temas)


// const notasDeTPs = [4, 7, 8, 5, 10];
// let notaFinal = 0;
// const notaFinalpromedio = notasDeTPs.forEach((nota) => {
//   notaFinal += nota

// });

// notaFinal = notaFinal / notasDeTPs.length
// console.log(notaFinal);


// const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
// const numerosPares = [];
// const numerosImpares = [];
// const seleccionPares = masNumeros.forEach((numero) =>{ if (numero % 2 === 0){numerosPares.push(numero)}
// else{numerosImpares.push(numero)}
// }
// )

// console.log(numerosPares)
// console.log(numerosImpares)


// const valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
// let dobles = [];
// const valorDuplicado = valores.forEach(valor => dobles.push(valor * 2)
// );
// console.log(valores);
// console.log(dobles);
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros)
// const numerosMasDiez = numeros.map((numero) => numero + 10);
// console.log(numerosMasDiez)


// const numeros = [3, 7, 13, 99];
// const dobles = numeros.map((numero) => numero * 2)
// console.log(numeros);
// console.log(dobles);


// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// const frasesExclamadas = frases.map((frase) => `${frase}!`)
// console.log(frases);
// console.log(frasesExclamadas);


// const librosDeJS = [
//   'JavaScript for Kids: A Playful Introduction to Programming',
//   'Composing Software',
//   'Eloquent JavaScript: A Modern Introduction to Programming',
//   'JavaScript: The Good Parts',
//   'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//   'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//   'JavaScript: The Definitive Guide',
//   'You Don’t Know JS',
//   'JavaScript Allongé: The Six Edition'
// ];
// const librosEnlista = librosDeJS.map((libro) => `<li> ${libro} </li>
//   `)
// console.log(`<ul>${librosEnlista}<ul>`)

// let playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];
// const cancionesConIndice = playlist.map((numero, i) => numero =  `${i} - ${numero}`
// )
// console.log(cancionesConIndice)


//EJERCICIO 7

const costos = [ 12.5, 56, 98, 45.75 ];

const agregarIVA = function (costo) {
  return costo * 1.21;
}

const sumarGanancia = function (costo) {
  return costo * 1.5;
}

// codear acá la solución del ejercicio


console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]

//EJERCICIO 8

const productos = [ 'celular', 'notebook', 'monitor' ];
const costos = [ 12.5, 56, 98 ];

const agregarIVA = function (costo) {
  return costo * 1.21;
}

const sumarGanancia = function (costo) {
  return costo * 1.5;
}

// codear acá la solución del ejercicio


console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]