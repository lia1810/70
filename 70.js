//forEach-1

// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// playlist.forEach(canciones => {
//   console.log(canciones)
// });

// //forEach-2

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
// let totalLibros = ``
// librosDeJS.forEach(libros => {
//   totalLibros++

// });
// console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros')

// //forEach-3
// let temas = ``
// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// playlist.forEach((canciones, indice) => {
//   temas += `- ${indice} - ${canciones}
//     `
// });
// console.log(temas)


// //forEach-4

// const numbers = [6, 1, 34, 94, 3, 17];
// let sum = 0;
// numbers.forEach(numero => {
//   sum += numero
// });
// console.log(sum)

// // forEach-5
// const notasDeTPs = [4, 7, 8, 5, 10];
// let notaFinal = 0;
// const notaFinalpromedio = notasDeTPs.forEach((nota) => {
//   notaFinal += nota

// });

// notaFinal = notaFinal / notasDeTPs.length
// console.log(notaFinal);

// //forEach-6
// const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
// const numerosPares = [];
// const numerosImpares = [];
// const seleccionPares = masNumeros.forEach((numero) => {
//   if (numero % 2 === 0) {
//     numerosPares.push(numero)
//   } else {
//     numerosImpares.push(numero)
//   }
// })

// console.log(numerosPares)
// console.log(numerosImpares)

// //forEach-7

// const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
// let dobles = [];
// const valorDuplicado = valores.forEach(valor => dobles.push(valor * 2));
// console.log(valores);
// console.log(dobles);


// //map-1
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros)
// const numerosMasDiez = numeros.map((numero) => numero + 10);
// console.log(numerosMasDiez)

// //map-2
// const numeros = [3, 7, 13, 99];
// const dobles = numeros.map((numero) => numero * 2)
// console.log(numeros);
// console.log(dobles);

// //map-3

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// const frasesExclamadas = frases.map((frase) => `${frase}!`)
// console.log(frases);
// console.log(frasesExclamadas);

// //map-4
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


// //map-5

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// // codear acá la solución del ejercicio


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ]

// //map-6

// let playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];
// const cancionesConIndice = playlist.map((numero, i) => numero = `${i} - ${numero}`)
// console.log(cancionesConIndice)



// // map- 7

// const costos = [12.5, 56, 98, 45.75];
// const preciosFinales = costos.map((numero) => numero * 1.5).map((numero) => numero * 1.21);
// console.log(preciosFinales);


// // //map-8 

// const productos = ['celular', 'notebook', 'monitor'];
// const costos = [12.5, 56, 98];

// const preciosFinales = costos.map((numero, i) => numero * 1.5).map((numero, i) => numero * 1.21);
// console.log(preciosFinales)

// const productosConPrecios = productos.map((producto, i) => producto + " " + preciosFinales[i])
// console.log(productosConPrecios);

// // deberia mostrar
// // [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]


// //filter
// const positivos = datos.filter((numero) => numero > 0)
// const valorDuplicado = positivos.forEach(numero => {
//   numero * 2
// });
// console.log(valorDuplicado)
// console.log(positivos)


//filter-2
const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
console.log(masNumeros)
// codea acá tu solución
const numerosPares = masNumeros.filter((numero) => numero % 2 === 0);
const numerosImpares = masNumeros.filter((numero) => numero % 2 != 0);

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);


//filter-3

const mix = [
  'Ut vero.',
  2,
  function () {
    console.log('hola mundo!')
  },
  56,
  'Diam rebum nonumy et.',
  true,
  false,
  'Kasd stet.',
  'Sit et dolor.',
  null,
  null,
  [1, 2, 3],
  'Dolore.'
];
console.log(mix)
let soloStrings = ""

soloStrings = mix.filter((elemento)=>
   typeof elemento === "string")
  
console.log(soloStrings)



// //filter-4
const playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
const playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']
let playlistSinEscuchar = []
playlistSinEscuchar = playlist.filter((canciones) =>
canciones != playlistEscuchada.includes())

// /// codea aca tu solución


console.log(playlistSinEscuchar);
// // deberia mostrar
// // [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]



// //reduce-1

// const numbers = [6, 1, 34, 94, 3, 17];

// const suma = numbers.reduce((acumuladora, numero) => {
//   return acumuladora + numero
// })
// console.log(suma)
// // deberia mostrar 155

// //reduce-2

// const numbers = [6, 1, 34, 94, 3, 17];
// const producto = numbers.reduce((acc, curr) => {
//   return acc * curr
// })
// console.log(producto)

// // // deberia mostrar 977976

// //reduce-3

// const notasDeTPs = [4, 7, 8, 5, 10];
// const promedio = notasDeTPs.reduce((acc, curr) => {
//   return acc + curr
// }, 0)
// console.log(promedio / 5)

// // deberia mostrar 6.8


// //reduce-5
// const personas = [{
//     nombre: "Grace",
//     edad: 6
//   },
//   {
//     nombre: "Ada",
//     edad: 19
//   },
//   {
//     nombre: "Hedy",
//     edad: 34
//   }
// ];
// const sumaDeEdades = personas.reduce((acc, val) => {
//   return acc + val.edad;
// }, 0)
// console.log(sumaDeEdades)

// // // deberia mostrar 59

// //integrados

// const datos = [2, -4, 6, 0, 5, -1];
// const resultadoFinal = datos.filter((numero) => numero >= 0)
//   .map((numero) => numero * 2)
//   .reduce((acc, val) => acc + val)
// console.log(resultadoFinal)






//-----------------------------------------------------------------con tecla Enter

// window.onkeypress = e => {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     abrirYCerrarModal(elegido);
//     preguntaSiExiste(calzado, elegido);
    
    
//   };

 
// imprimirCalzadoSeleccionado(calzado, elegido);
// };