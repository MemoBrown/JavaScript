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
const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const AUMENTAR_DE_PESO = persona => persona.peso += INCREMENTO_PESO;
const ADELGAZAR = persona => persona.peso -= INCREMENTO_PESO;
const COME_MUCHO = () => Math.random() < 0.3;
const REALIZA_DEPORTE = () => Math.random() < 0.4;


const META = memo.peso - 3;
var dias = 0;

while(memo.peso > META){
    if(COME_MUCHO()){
    AUMENTAR_DE_PESO(memo)
  }
  if(REALIZA_DEPORTE()){
    ADELGAZAR(memo)
  }
  dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${memo.nombre} adelgazo 3 kilos`)