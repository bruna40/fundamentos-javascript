// exemplos de classes

class Pessoa {
    nome;
    idade;
    altura;
    peso;
    nacionalidade;

    constructor(nome, idade, altura, peso, nacionalidade) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.nacionalidade = nacionalidade;
    }

    descricao() {
        return `${this.nome} tem ${this.idade} anos, ${this.altura}m de altura e pesa ${this.peso}kg`;
    }
}

const perfil = new Pessoa('João', 25, 1.75, 80, 'Brasileiro');


console.log(perfil.descricao());

// Desafio 1

class Carro {

    marca;
    cor;
    valorMedioDeConsumo;

    constructor(marca, cor, valorMedioDeConsumo) {
        this.marca = marca;
        this.cor = cor;
        this.valorMedioDeConsumo = valorMedioDeConsumo;
    }

    valorGasto(preco, distancia) {
        const litro = distancia/this.valorMedioDeConsumo;
        const valor = litro * preco;
        console.log(`Valor gasto em média usando ${this.marca} é: R$ ${valor.toFixed(2)}`);
    }
}

const carro = new Carro('Fiat', 'Vermelho', 10);
console.log(carro);
carro.valorGasto(2.5, 50);

// Desafio 2

class Calculadora {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC() {
        const IMC = this.peso / (this.altura * this.altura);
        return IMC.toFixed(2);
    }

    classficaIMC() {
        const IMC = this.calculaIMC();

        if(IMC < 18.5) {
        returng(`${this.nome} está abaixo do peso com o IMC de ${IMC}`);
        }
        else if(IMC >= 18.5 && IMC <= 24.9) {
        return(`${this.nome} está com o peso normal com o IMC de ${IMC}`);
        }
        else if(IMC >= 25 && IMC <= 29.9) {
            return(`${this.nome} está com sobrepeso com o IMC de ${IMC}`);
        }
        else if(IMC >= 30 && IMC <= 34.9) {
            return(`${this.nome} está com obesidade grau 1 com o IMC de ${IMC}`);
        }
        else if(IMC >= 35 && IMC <= 39.9) {
            return(`${this.nome} está com obesidade grau 2 com o IMC de ${IMC}`);
        }
        else if(IMC >= 40) {
            return( `${this.nome} está com obesidade grau 3 com o IMC de ${IMC}`);
        }
    }
}

const calculadora = new Calculadora('João', 80, 1.8);

console.log(calculadora.classficaIMC());