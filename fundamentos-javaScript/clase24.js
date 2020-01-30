class persona {
  constructor(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
  }

  saludar(fn) {
    var {nombre, apellido} = this
    if(this.altura >= SOY_ALTO){
      console.log(`Hola, me llamo ${nombre} ${apellido}. Tengo ${this.edad} años y mido ${this.altura} mts. Soy alto para la estatura promedio de mi país`)
    } else {
      console.log(`Hola, me llamo ${nombre} ${apellido}. Tengo ${this.edad} años y mido ${this.altura} mts. Soy bajo para la estatura promedio de mi país`)
    }
    if(fn) {
      fn(nombre, apellido)
    }
  }
}

const SOY_ALTO = 1.74

class desarrollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
   }

  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    if(fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mira no sabia que eras desarrollador`)
  }
}

var memo = new desarrollador('Guillermo', 'Moreno', 27, 1.75)
var gaby = new persona('Gabriela', 'Quezada', 23, 1.60)
var checo = new persona('Sergio', 'Mendez', 25, 1.79)

memo.saludar(responderSaludo)
gaby.saludar(responderSaludo)
checo.saludar(responderSaludo)