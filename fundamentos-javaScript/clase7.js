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

function imprimirNombreYEdad(persona){
  console.log(`Hola soy ${persona.nombre} y tengo ${persona.edad} años`)
}

imprimirNombreYEdad(memo)
imprimirNombreYEdad(gaby)
// 'Hola soy ' + persona.nombre + ' y tengo ' + persona.edad + ' años'