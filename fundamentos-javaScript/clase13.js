var memo = {
  nombre: 'Guillermo',
  apellido: 'Moreno',
  edad: 27,
  peso: 72
}

console.log(`Al inicio del año ${memo.nombre} pesa ${memo.peso}kg.`);

// function aumentarDePeso(persona){
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2

const AUMENTAR_DE_PESO = persona => persona.peso += INCREMENTO_PESO
const ADELGAZAR = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) {
  var random = Math.random()
  if(random < 0.25){
    AUMENTAR_DE_PESO(memo)
  } else if(random < 0.5) {
    ADELGAZAR(memo)
  }
}

console.log(`Al final del año ${memo.nombre} pesa ${memo.peso.toFixed(1)}kg.`);