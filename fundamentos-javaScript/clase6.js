var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  edad: 28
}

var gaby = {
  nombre: 'Gabriela',
  apellido: 'Quezada',
  edad: 23
}

function imprimirNombreEnMayusculas(persona){
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(memo)
imprimirNombreEnMayusculas(gaby)
// imprimirNombreEnMayusculas({ apellido: 'sergio' })
//imprimirNombreEnMayusculas()