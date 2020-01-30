var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  edad: 27
}

var gaby = {
  nombre: 'Gabriela',
  apellido: 'Quezada',
  edad: 23
}

function imprimirNombreEnMayusculas(persona){
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(memo)
imprimirNombreEnMayusculas(gaby)
// 'Hola soy ' + persona.nombre + ' y tengo ' + persona.edad + ' años'

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
