var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  altura: 1.75,
  cantidadDeLibros: 16
}

var sergio = {
  nombre: 'Sergio',
  apellido: 'Mendez',
  altura: 1.79,
  cantidadDeLibros: 13
}

var gaby = {
  nombre: 'Gabriela',
  apellido: 'Quezada',
  altura: 1.60,
  cantidadDeLibros: 13
}

var personas = [memo, sergio, gaby]

// var acum = 0

// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const REDUCER = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(REDUCER, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)