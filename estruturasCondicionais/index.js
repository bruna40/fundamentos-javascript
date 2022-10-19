// Desafio 1

const ehPar = (x) => x % 2 === 0? "Par" : "Impar";

console.log(ehPar(2));

// Desafio 2

const valorGasto = (preco, consumo, distancia, tipo) => {

    if(tipo === "gasolina" || tipo === "Gasolina") {
        const litro = distancia/consumo;
        const valor = litro * preco;
        console.log(`Valor gasto em média usando gasolina é: R$ ${valor.toFixed(2)}`);
    }
    else if(tipo === "etanol" || tipo === "Etanol") {
        const litro = distancia/consumo;
        const valor = litro * preco;
        console.log(`Valor gasto em média usando álcool é: R$ ${valor.toFixed(2)}`);
    }
    else {
        console.log("Tipo de combustível inválido");
    }
}

valorGasto(2.5, 10, 50, "etanol");

// Desafio 3

const validaNota = (x,y,z) => {
    const nota = (x+y+z)/3;
    if(nota > 0 && nota < 5) {
        console.log("Reprovado");
    } else if(nota >= 5 && nota <= 6.9) {
        console.log("Recuperação");
    }
    else if(nota >= 7 && nota <= 10) {
        console.log("Aprovado");
    }
    else {
        console.log("Nota inválida");
    }
}

validaNota(5,3.9,7);

// Desafio 4

const calculaIMC = (peso, altura) => {
    const IMC = peso / (altura * altura);

    if(IMC < 18.5) {
        console.log("Abaixo do peso");
    } else if(IMC >= 18.5 && IMC <= 24.9) {
        console.log("Peso normal");
    } else if(IMC >= 25 && IMC <= 29.9) {
        console.log("Sobrepeso");
    } else if(IMC >= 30 && IMC <= 34.9) {
        console.log("Obesidade grau 1");
    } else if(IMC >= 35 && IMC <= 39.9) {
        console.log("Obesidade grau 2");
    } else if(IMC >= 40) {
        console.log("Obesidade grau 3");
    }
}

calculaIMC(80, 1.8);

// Desafio 5

const calculaJuros = (valor, metodo, parcela) => {
    if(metodo === "Debito" || metodo === "debito" && !parcela) {
        console.log(`Valor a pagar no Debito: R$ ${(valor*0.90).toFixed(2)}`);
    } else if(metodo === "Dinheiro" || metodo === "dinheiro" || metodo === "Pix" || metodo === "pix" && !parcela) {
    console.log(`Valor a pagar no Dinheiro ou pix: R$ ${(valor*0.85).toFixed(2)}`);
    } else if(metodo === "Credito" || metodo === "credito" && parcela <= 2) {
        console.log(`Valor a pagar no Credito a vista: R$ ${valor}`);
    } else if(metodo === "Credito" || metodo === "credito" && parcela > 2) {
        console.log(`Valor a pagar no Credito parcelado acima de 2 vezes: R$ ${(valor*1.10).toFixed(2)}`);
    }
}

calculaJuros(100, "Pix");