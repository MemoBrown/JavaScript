function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function persona(nombre, apellido, edad, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
}

const SOY_ALTO = 1.74

persona.prototype.alto = function() {
  if(this.altura >= SOY_ALTO){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Tengo ${this.edad} años y mido ${this.altura} mts. Soy alto para la estatura promedio de mi país`)
  } else {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Tengo ${this.edad} años y mido ${this.altura} mts. Soy bajo para la estatura promedio de mi país`)
  }
}

// persona.prototype.saludar = function() {
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Tengo ${this.edad} años y mido ${this.altura} mts`)
// }

function desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(desarrollador, persona)


desarrollador.prototype.saludar = function() {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}


// var memo = new persona('Guillermo', 'Moreno', 27, 1.75)
// var gaby = new persona('Gabriela', 'Quezada', 23, 1.60)
// var checo = new persona('Sergio', 'Mendez', 25, 1.79)

// memo.alto()
// gaby.alto()
// checo.alto()