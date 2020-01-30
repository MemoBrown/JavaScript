var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  edad: 27,
  ingeniero: false,
  programador: true,
  cantante: false,
  dj: false
}

var gaby = {
  nombre: 'Gabriela',
  apellido: 'Quezada',
  edad: 23
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if(persona.programador) {
    console.log('Programador')
  } 
    
  if(persona.cantante) {
    console.log('Cantante')
  }

  if(persona.dj) {
    console.log('DJ')
  }

}

imprimirProfesiones(memo)