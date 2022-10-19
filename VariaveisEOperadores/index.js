// Exemplos de uso de operadores aritméticos
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;


// Desafio 1
const calculaValorCombustivel = (preco, consumo, distancia) => {
    const litros = distancia / consumo;
    const valor = litros * preco;
    return valor.toFixed(2);
}

console.log(`Valor gasto em média é: R$ ${calculaValorCombustivel(2.5, 10, 50)}`);

