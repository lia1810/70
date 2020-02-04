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





// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros)
// const numerosMasDiez = numeros.map((numero) => numero + 10);
// console.log(numerosMasDiez)


const numeros = [3, 7, 13, 99];
const dobles = numeros.map((numero) => numero*2)
console.log(numeros); 
console.log(dobles); 

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
const frasesExclamadas = frases.map((frase) => `${frase}!`)
console.log(frases); 
console.log(frasesExclamadas); 

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];
  const librosEnlista = librosDeJS.map((libro) => `<li> ${libro} </li>
  `)
  console.log(`<ul>${librosEnlista}<ul>`)