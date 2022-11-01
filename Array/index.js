// Exerccios do HACKERRANK
// Desafio 1
function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 5]));

// Desafio 2

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            alice++;
        } else if(a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}

// Desafio 3

function aVeryBigSum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
// Desafio 4

//  Básico
//  Princípios Básicos
// Desafio
// Faça um Programa que leia cinco números inteiros e armazene-os em um vetor chamado VETOR. Armazene os números pares no vetor PAR e os números ímpares no vetor IMPAR. 

// Entrada 
// Peça ao usuário que insira o valor de cinco números inteiros. 

// Saída
// Imprima os valores dos três vetores um em cada linha mostrando na primeira linha, os valores no Vetor, na segunda linha os valores Par(es) e na terceira linha os valores ímpares Impar(es). Conforme o exemplo a baixo.  

let vetor = [ 3, 2, 1, 5];
let pares = [];
let impares = [];

for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] % 2 === 0) {
        console.log(pares.push(vetor[i]))
    } else {
        console.log("Impar", impares.push(vetor[i]))
    }
}
