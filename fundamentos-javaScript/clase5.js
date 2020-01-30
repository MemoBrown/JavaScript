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

function imprimirNombreEnMayusculas({apellido}){
  console.log(apellido.toUpperCase())
}

imprimirNombreEnMayusculas(memo)
imprimirNombreEnMayusculas(gaby)
imprimirNombreEnMayusculas({ apellido: 'sergio' })
//imprimirNombreEnMayusculas()