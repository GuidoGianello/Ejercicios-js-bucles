// console.log("holis")

// function saludar(nombre) {
//     console.log("Hola " + nombre + "veo que estas muy perdido con las funciones")
// }
// let nombreIngresado = prompt("Ingrese su nombre")
// saludar(nombreIngresado)



//-----------Ejercicio 1------------//

function saludar(nombre) {
    return console.log("Hola " + nombre + " como te va con js?")
}
saludar("Guido")

//-----------Ejercicio 2------------//

function multiplicar(a,b){
    return a * b
}

console.log(multiplicar(2,2))
console.log(multiplicar(3,3))

//----------Ejercicio 3------------//

function areaTriangulo(base,altura){
    base = (base * altura) / 2
    return base
}

function perimetroTriangulo(ladoA, ladoB, ladoC){
    perimetro = ladoA + ladoB + ladoC
    return perimetro
}

console.log("El area del triangulo es: " + areaTriangulo(5,3) + " y su perimetro es de " + perimetroTriangulo(4, 5, 6))

//-----------Ejercicio 4---------//

function calcularPrecio(precio, cantidad){
   let resultado = precio * cantidad 
   if (cantidad >= 10) {
       console.log(resultado * 0.9)       
   } if (cantidad >= 20) {
   console.log(resultado * 0.8)
   }
   return resultado
}
console.log(calcularPrecio(10, 20))

//----------Ejercicio 5--------//

function esMayorDeEdad(edad) {
    console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad")
}
esMayorDeEdad(18)
esMayorDeEdad(15)
esMayorDeEdad(20)

//---------Ejercicio 6--------//

function calcularImpuesto(ingresoAnual){
    
    if (ingresoAnual <= 10000){
        impuesto = ingresoAnual * 0.1
    } else if (ingresoAnual > 10000 && ingresoAnual <= 20000){
        impuesto = ingresoAnual * 0.15
    } else {
        impuesto = ingresoAnual * 0.2
    }
    return impuesto
}

    
 console.log("Su impuesto es de: " + calcularImpuesto(1000))
 console.log("Su impuesto es de: " + calcularImpuesto(10000))
 console.log("Su impuesto es de: " + calcularImpuesto(15000))
 console.log("Su impuesto es de: " + calcularImpuesto(20000))
 console.log("Su impuesto es de: " + calcularImpuesto(50000))


 //--------Ejercicio 7-------//

 function verificarDia(diaSemana) {
    switch (diaSemana) {
        case 1:
            case 2:
                case 3:
                    case 4:
                        case 5:
                            console.log("Es dia laboral")
                            break
                            case 6:
                                case 7:
                                    console.log("No es dia laboral")
                        break
                        default:
                            console.log("Dato incorrecto")
                        }
                    }
verificarDia(1)
verificarDia(6)  

//------------Ejercicios Condicionales---------//
//---------Ejercicio 1---------//

function mayorMenor(a, b) {
    if (a > b) {
        console.log(`${a} es mayor que ${b}`)
    } else {
        console.log(`${a} no es mayor que ${b}`)
    }
}
mayorMenor(10, 5)
mayorMenor(5, 10)

//---------Ejercicio 2--------//

function igualDiferente(a, b) {
    if (a == b) {
        console.log("Los numeros son iguales")
    } else {
        console.log("Los numeros son diferentes :(")
    }
}
igualDiferente(10, 10)
igualDiferente(10, 11)

//---------Ejercicio 3--------//

function numeroGrandeIgual(a, b) {
    if (a > b) {
        console.log("El primer numero es mayor")
    } else if (a < b) {
        console.log("El segundo numero es mayor")
    } else {
        console.log("Son iguales")
    }
}
numeroGrandeIgual(10, 5)
numeroGrandeIgual(5, 10)
numeroGrandeIgual(5, 5)

//--------Ejercicio 4---------//

 function numMenor(a, b, c) {
     if (a <= b && a <= c) {
         console.log("El primer numero ingresado es mas chico")
     } else if (b <= a && b <= c) {
         console.log("El segundo numero ingresado es mas chico")
     } else {
         console.log("El tercer numero ingresado es mas chico")
     }
 }
 numMenor(2, 3, 4)
 numMenor(3, 2, 4)
 numMenor(3, 2, 1)

//--------Ejercicio 5--------//

let persona1 = {
    nombre: "Juan",
    edad: 20,
    altura: 1.75
}
let persona2 = {
    nombre: "Pepito",
    edad: 30,
    altura: 1.80
}

function personitas(persona1, persona2) {
    if(persona1.altura > persona2.altura) {
        console.log(persona1.nombre + " es mas alto que " + persona2.nombre)
    } else if(persona2.altura > persona1.altura) {
        console.log(persona2.nombre + " es mas alto que " + persona1.nombre)
    } else {
        console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma altura.")
    }
    
    if(persona1.edad > persona2.edad) {
        console.log(persona1.nombre + " es mayor que " + persona2.nombre)
    } else if(persona2.edad > persona1.edad) {
        console.log(persona2.nombre + " es mayor que " + persona1.nombre)
    } else {
        console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad")
    }
}

personitas(persona1, persona2)

//----------Ejercicio 6-------//

function carnetConducir() {
    let nombre = prompt("Ingresa tu nombre")
    let edad = parseInt(prompt("Ingrese su edad"))
    let altura = parseInt(prompt("Ingrese su altura"))
    let vision = parseInt(prompt("Ingrese su puntaje de vision"))
    if(edad >= 18 && altura >= 150 && vision >= 8) {
        console.log("Usted esta apto para conducir")
    } else {
        console.log("Usted no esta apto para conducir")
    }
}

carnetConducir()

//--------Ejercicio 7--------//

// let controlEntrada = {
//     nombre: prompt("Ingresa tu nombre:"),
//     pase: prompt("Ingresa el tipo de pase (VIP o normal):"),
//     tieneEntrada: prompt("Ingrese si tiene entrada (Si o No):")
// }
// function tieneAcceso() {
//     if (controlEntrada.nombre === "Juan") {
//         console.log("Por llamarte 'Juan' tienes ingreso libre")
//     } else if (controlEntrada.pase === "VIP") {
//         console.log("Por tener pase VIP tienes ingreso libre")
//     } else if (controlEntrada.nombre !== "Juan" && controlEntrada.pase !== "VIP" && controlEntrada.tieneEntrada === "Si") {
//         let usoEntrada = prompt("¿Desea usar su entrada? (SI o No)")
//         if (usoEntrada === "Si") {
//             console.log("Por usar su entrada tienes ingreso libre")
//         } else {
//             console.log("Gracias por asistir al evento")
//         }
//     } else if (controlEntrada.nombre !== "Juan" && controlEntrada.pase !== "VIP" && controlEntrada.tieneEntrada === "No") {
//         let dineroDisp = prompt("¿Cuanto dinero dispone?")
//         if (dineroDisp >= 1000) {
//             console.log("La venta de la entrada es exitosa")
//         } else {
//             console.log("Venta rechazada")
//         };
//     };
// };
// tieneAcceso()

//--------- Ejercicio 8 ---------//

// let numeroIncognita = Math.floor(Math.random() * 10) + 1
// let intentos = 3
// function adivinanza() {
//     for (let intentos = 3; intentos > 0; intentos--) {
//         let numeroIngresado = parseInt(prompt("Ingresa un número de 1 a 10. Intentos restantes: " + intentos))
//         if (numeroIngresado === numeroIncognita) {
//             console.log("¡Felicitaciones, adivinaste el número!")
//         } else if (numeroIngresado > numeroIncognita) {
//             console.log("El número ingresado es mayor al número incógnita")
//         } else {
//             console.log("El número es menor al número incógnita")
//             if (intentos === 1) {
//                 console.log("Agotaste tus intentos. El número incógnita era " + numeroIncognita)
//             };
//         };
//     };
// };
// adivinanza()

//--------- Ejercicio 9 ---------//

// let edadPersona = parseInt(prompt("Ingresa tu edad:"))
// function determinaEdades() {
//     if (edadPersona >= 0 && edadPersona <= 12) {
//         console.log("La edad de " + edadPersona + " años es la edad de un infante")
//     } else if (edadPersona > 13 && edadPersona <= 18) {
//         console.log("La edad de " + edadPersona + " años es la edad de un adolescente")
//     } else if (edadPersona > 19 && edadPersona <= 45) {
//         console.log("La edad de " + edadPersona + " años es la edad de un mayor-joven")
//     } else if (edadPersona > 45 && edadPersona <= 99) {
//         console.log("La edad de " + edadPersona + " años es la edad de un anciano")
//     } else {
//         console.log(prompt("En realidad tienes esta edad?."))
//     }
// }
// determinaEdades()

//---------- Ejercicio 10 ---------//

// let jugador1 = prompt("Jugador uno ingrese: PIEDRA, PAPEL o TIJERA")
// let jugador2 = prompt("Jugador dos ingrese: PIEDRA, PAPEL o TIJERA")
// function piedraPapelTijera() {
//     if ((jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERA") || (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERA")) {
//         console.log("uno de los jugadores hizo trampa")
//     } else if (jugador1 === jugador2) {
//         console.log("Empate")
//     } else if (
//         (jugador1 === "PIEDRA" && jugador2 === "TIJERA") ||
//         (jugador1 === "TIJERA" && jugador2 === "PAPEL") ||
//         (jugador1 === "PAPEL" && jugador2 === "PIEDRA")
//     ) {
//         console.log("Ha ganado el Jugador 1")
//     } else {
//         console.log("Ha ganado el Jugador 2")
//     }
// }
// piedraPapelTijera()

//--------- Ejercicio 11 ---------//

// let colorElegido = prompt("Elija un color:")
// function eleccionColor() {
//     switch (colorElegido) {
//         case "Blanco":
//             console.log("Falta de color.")
//             break
//         case "Negro":
//             console.log("Falta de color.")
//             break
//         case "Verde":
//             console.log("El color de la naturaleza.")
//             break
//         case "Azul":
//             console.log("El color del agua.")
//             break
//         case "Amarillo":
//             console.log("El color del sol.")
//             break
//         case "Rojo":
//             console.log("El color del fuego.")
//             break
//         case "Marron":
//             console.log("El color de la tierra.")
//             break
//         default:
//             console.log("Excelente eleccion, no lo teniamos pensado.")
//             break
//     }
// }
// eleccionColor()

//-------- Ejercicio 12 --------//

// let numUno = parseInt(prompt("Ingresa el primer numero"))
// let numDos = parseInt(prompt("Ingresa el segundo numero"))
// let oper = prompt("Suma, Resta, Multiplicacion y/o Division")
// function suma(numUno, numDos, oper) {
//     if (oper === "Suma") {
//         console.log(`La suma de ${numUno} y ${numDos} es ${numUno + numDos}`)
//     }
// }
// function resta(numUno, numDos, oper) {
//     if (oper === "Resta") {
//         console.log("La resta de " + numUno + " y " + numDos + " es " + numUno + numDos)
//     }
// }
// function multiplicacion(numUno, numDos, oper) {
//     if (oper === "Multiplicacion") {
//         console.log("El producto de " + numUno + " y " + numDos + " es " + numUno * numDos)
//     }
// }
// function division(numUno, numDos, oper) {
//     if (oper === "Division") {
//         if (numDos !== 0) {
//             console.log("El cociente de " + numUno + " y " + numDos + " es " + numUno / numDos)
//         } else {
//             console.log("Error el divisor ingresado es CERO")
//         }
//     }
// }
// suma(numUno, numDos, oper)
// resta(numUno, numDos, oper)
// multiplicacion(numUno, numDos, oper)
// division(numUno, numDos, oper)

//--------- Ejercicio 13 ----------//

// let nombre = prompt("Ingresa tu nombre")
// let apellido = prompt("Ingresa tu apellido")
// let documento = parseInt(prompt("Ingresa tu numero de documento"))
// function verificaDatos() {
//     let datosIngresados = {
//         nombre: nombre,
//         apellido: apellido,
//         documento: documento,
//     }
//     console.log(datosIngresados)
//     let confirmando = prompt("Son correctos estos datos? Si o No")
//     if (confirmando === "Si") {
//         console.table(datosIngresados)
//         console.log("Hola " + datosIngresados.nombre + " " + datosIngresados.apellido + " tu registro fue exitoso")
//     } else {
//         console.log(datosIngresados.nombre + " vuelve a intentarlo en un mes")
//     }
// }
// verificaDatos()

//----------- Ejercicios Bucles-----------//

//----------- Ejercicio 1 ------------//

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 100:`))
// if (numeroIngresado >= 1 && numeroIngresado <= 100) {
//     console.log(`Números entre ${numeroIngresado} y 0:`)
//     for (let i = numeroIngresado; i >= 0; i--) {
//         console.log(i)
//     };
// } else {
//     console.log(`El numero ${numeroIngresado} no esta entre 1 y 100`)
// }


//----------- Ejercicio 2 --------------//

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 10:`))
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${numeroIngresado} = ${i * numeroIngresado}`)
// }

//---------- Ejercicio 3 ---------------//

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 10:`))
// let suma = 0
// while (numeroIngresado !== 0) {
//     suma += numeroIngresado
//     numeroIngresado = parseInt(prompt("Ingresa otro número o ingresa 0 para finalizar:"))
// }
// console.log(`La suma de lo numeros ingresados hasta el momento es ${suma}`)

//---------- Ejercicio 4 -----------//

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 10:`))
// let suma = 0
// do {
//     suma += numeroIngresado
//     numeroIngresado = parseInt(prompt("Ingresa otro número o ingresa 0 para finalizar:"))
// } while (numeroIngresado !== 0)
// console.log(`La suma de lo numeros ingresados hasta el momento es ${suma}`)

//---------- Ejercicio 5 -----------//

// let nuevoNumero = Number(prompt(`Ingresa un numero entre 1 y 10:`))
// let intentos = 0
// do {
//     if (nuevoNumero > suma) {
//         console.log(`El numero ingresado es mayor que el numero secreto`)
//         nuevoNumero = Number(prompt(`El numero ingresado es mayor que el numero secreto, ingresa un numero entre 1 y 10:`))
//         intentos++
//     } else if (nuevoNumero < suma) {
//         console.log(`El numero ingresado es menor que el numero secreto`)
//         nuevoNumero = Number(prompt(`El numero ingresado es menor que el numero secreto, ingresa un numero entre 1 y 10:`))
//         intentos++
//     } else {
//         console.log(`Adivinaste! el numero secreto es ${suma} en ${intentos} intentos`)
//     }
// } while (nuevoNumero !== suma)

//----------- Ejercicio 6 ----------//

// let numeroIngresado = parseInt(prompt(`Ingrese un numero:`))
// for (let i = 1; i <= numeroIngresado; i++) {
//     if (numeroIngresado % i === 0) {
//         console.log(numeroIngresado / i)
//     }
// }

//----------- Ejercicio 7 ----------//

// let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]
// for (color of colores) {
//     console.log(color)
// }

//----------- Ejercicio 8 ----------//

// let numeros = [5, 7, 10, 13, 17]
// for (numero of numeros) {
//     console.log(`El numero es ${numero} y su doble es ${numero * 2}`)
// }

//----------- Ejercicio 9 ----------//

// let grupoFamiliar = [
//     {
//         nombre: "Marisa",
//         edad: 58,
//         integrante: "Madre",
//         gusto: "jardineria",
//     },
//     {
//         nombre: "Romina",
//         edad: 36,
//         integrante: "Hermana",
//         gusto: "gatos",
//     },
//     {
//         nombre: "Belen",
//         edad: 26,
//         integrante: "Hermana",
//         gusto: "estudiar",
//     },
//     {
//         nombre: "Leonardo",
//         edad: 59,
//         integrante: "Padre",
//         gusto: "trabajar",
//     },
//     
//         
// ]
// for (miembro of grupoFamiliar) {
//     console.log(`Hola soy ${miembro.nombre} y tengo ${miembro.edad} años, soy el/la ${miembro.integrante} y me gusta ${miembro.gusto}`)
// }

//----------- Ejercicio 10 ----------//


// let estudiante = {
//     nombre: "Guido",
//     apellido: "Gianello",
//     esArgentino: true,
//     edad: 31,
//     estudios: "Secundario Completo"
// }
// for (let propiedad in estudiante) {
//     console.log(propiedad);
// }

//---------- Ejercicio 11 -----------//

// for (propiedad in estudiante) {
//     console.log(estudiante[propiedad])
// }

//---------- Ejercicio 12 ----------//

// let nuevoNumero = parseInt(prompt(`Ingrese un numero`))
// let sumaNumPar = 0
// let sumaNumImpar = 0
// do {
//     nuevoNumero = parseInt(prompt(`Ingrese un nuevo numero`))
//     if (nuevoNumero !== 0) {
//         if (nuevoNumero % 2 === 0) {
//             sumaNumPar += 1;
//         } else {
//             sumaNumImpar += 1
//         }
//     }
// } while (nuevoNumero !== 0)
// console.log(`La suma de los numeros pares es: ${sumaNumPar}`)
// console.log(`La suma de los numeros impares es: ${sumaNumImpar}`)

//---------- Ejercicio 13 -----------//

// let numeros = [128, 27, 414, 989, 43, 62, 238, 362, 625, 439, 328]
// let mayorNumero = 0
// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > mayorNumero) {
//         mayorNumero = numeros[i]
//     }
// }
// console.log(`El numero mas grande es: ${mayorNumero}`)

