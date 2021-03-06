var ariel = {
  nombre: 'Ariel',
  apellido: 'Ayala',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${ariel.nombre} pesa ${ariel.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIA_DEL_AÑO = 365

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const aumentarDePeso = (persona, incremento) =>  persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIA_DEL_AÑO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(ariel)
  } else if (random < 0.5){
    adelgazar(ariel)
  }
}
console.log(`Al final del año ${ariel.nombre} pesa ${ariel.peso.toFixed(1)} kg`)
