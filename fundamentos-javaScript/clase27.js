const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

const ON_PEOPLE_RESPONSE = function (persona){
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL, OPTS, ON_PEOPLE_RESPONSE)
}

obtenerPersonaje(12)
// obtenerPersonaje(2)
// obtenerPersonaje(3)