var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  altura: 1.74
}

var sergio = {
  nombre: 'Sergio',
  apellido: 'Mendez',
  altura: 1.78
}

var gaby = {
  nombre: 'Gabriela',
  apellido: 'Quezada',
  altura: 1.60
}

var personas = [memo, sergio, gaby]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} metros`)
}