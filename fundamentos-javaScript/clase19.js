var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  altura: 1.81
}

var sergio = {
  nombre: 'Sergio',
  apellido: 'Mendez',
  altura: 1.88
}

var gaby = {
  nombre: 'Gabriela',
  apellido: 'Quezada',
  altura: 1.60
}

const ES_ALTA = ({altura}) => altura > 1.8

var personas = [memo, sergio, gaby]

var personasAltas = personas.filter(ES_ALTA)

const PASAR_ALTURA_A_CMS = persona => {
  // persona.altura = persona.altura * 100
  return {
    ...persona,
    altura: persona.altura * 100
  }
}

var personasCms = personas.map(PASAR_ALTURA_A_CMS)

console.log(personasCms)
