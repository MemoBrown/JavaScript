var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  edad: 27,
  ingeniero: false,
  programador: true,
  cantante: false,
  dj: false
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(p) {
  return p.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(p) {
  if(esMayorDeEdad(p)){
    console.log(`${p.nombre} tiene ${p.edad}, es mayor de edad.`)
  } else {
    console.log(`${p.nombre} tiene ${p.edad}, es menor de edad.`)
  }
}

//imprimirSiEsMayorDeEdad(memo)