const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(URL, OPTS, function(data){
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedio un error al obtener personaje ${id}`)
}

obtenerPersonaje(1)
  .then(personaje1 => {
    console.log(`El pesonaje 1 es ${personaje1.name}`)
    return obtenerPersonaje(2)
  })
  .then(personaje2 => {
    console.log(`El pesonaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje3 => {
    console.log(`El pesonaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
  })
  .then(personaje4 => {
    console.log(`El pesonaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje5 => {
    console.log(`El pesonaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(6)
  })
  .then(personaje6 => {
    console.log(`El pesonaje 6 es ${personaje6.name}`)
    return obtenerPersonaje(7)
  })
  .then(personaje7 => {
    console.log(`El pesonaje 7 es ${personaje7.name}`)
  })

  .catch(onError)