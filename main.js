console.log("Hola que ashe")

//  let numeroIngresado = prompt("Ingrese un numero entre 1 y 100:")
//  for (let i = numeroIngresado; i >= 0; --i) {
//      console.log(i)
//  }

//forma invertida inventada por David
// let numeroIngresado = prompt("Ingrese un numero entre 1 y 100:")
// for (let i = 0; i <= numeroIngresado; ++i) {
//     console.log(numeroIngresado - i)
// }

// let numeroIngresado2 = prompt("Ingrese un numero entre 1 y 10")
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${numeroIngresado2} = ${numeroIngresado2 * i}` )
// }

// let numeroIngresado3 = Number(prompt("Ingrese un numero"))
// let resultado = 0
// while (numeroIngresado3 != 0) {
//     resultado = numeroIngresado3 + resultado  // resultado += numeroIngresado3
//     numeroIngresado3 = Number(prompt("Ingrese un numero"))
     
// }
// console.log(resultado)


// let numeroIngresado4 
// let resultado = 0
// do {
//      numeroIngresado4 = Number(prompt("Ingrese un numero"))
//      resultado = numeroIngresado4 + resultado  // resultado += numeroIngresado3
// }  while (numeroIngresado4 != 0)

// console.log(resultado)

function resultado1() {
    let numeroIngresado3 = Number(prompt("Ingrese un numero"))
 let resultado = 0
 while (numeroIngresado3 != 0) {
     resultado = numeroIngresado3 + resultado  // resultado += numeroIngresado3
     numeroIngresado3 = Number(prompt("Ingrese un numero"))
     
 }
 console.log(resultado)
 return resultado
}
let numerito = resultado1()
let numeroAdivinado = Number(prompt("ingrese un numero para adivinar"))
let numeroIntento = 1

while (numeroAdivinado != numerito) {
    if (numeroAdivinado > numerito) {
        console.log("El numero que ingresaste es mayor que el num secreto")
    }
    if (numeroAdivinado < numerito) {
        console.log("El numero que ingresaste es menor que el num secreto")
    } 
    numeroIntento++
    numeroAdivinado = Number(prompt("ingrese un numero para adivinar"))
}
console.log("Acertaste! El numero secreto es: " + numeroAdivinado + " realizaste " + numeroIntento + " intentos")

