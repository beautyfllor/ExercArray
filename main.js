'use strict'
// Utilizando apenas o paradigma declarativo

const numeros = [20, 131, 70, 279, 320]

// 1) Criar um novo array com os valores ao quadrado.
const valorQuadrado = (numero) => numero * numero
const valoresQuadrado = numeros.map(valorQuadrado)

console.log("Valores ao quadrado: ", valoresQuadrado)

// 2) Criar um novo array com os valores pares.
const valorPar = (numero) => numero % 2 == 0
const valoresPares = numeros.filter(valorPar)

console.log("Os números pares são: ", valoresPares)

// 3) Calcular a média dos valores.
const tamanhoArray = numeros.length -1
const soma = (a,b) => a + b
const total = numeros.reduce(soma, 0)
const media = (total) => total / tamanhoArray
const mediaArray = numeros.reduce(media, null)

console.log("A média é ")

// 4) Calcular a soma dos valores ímpares.
const valorImpar = (numero) => numero % 2 == 1
const valoresImpares = numeros.filter(valorImpar)
const somaImpares = (a,b) => a + b
const totalImpares = valoresImpares.reduce(somaImpares, 0)

console.log("A soma dos ímpares é ", totalImpares)

// 5) Calcular o valor total, sabendo que cada valor teve 20% de desconto.
const valorDesconto = (numero) => numero * (20/100)


console.log("O total dos valores com desconto é ")