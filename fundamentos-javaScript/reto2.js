var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  edad: 10,
  ingeniero: false,
  programador: true,
  cantante: false,
  dj: false
}

function imprimirSiEsMayorDeEdad(p) {
  if(p.edad >= 18){
    console.log(`${p.nombre} tiene ${p.edad}, es mayor de edad.`)
  } else {
    console.log(`${p.nombre} tiene ${p.edad}, es menor de edad.`)
  }
}

imprimirSiEsMayorDeEdad(memo)