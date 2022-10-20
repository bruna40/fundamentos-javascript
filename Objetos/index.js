// exemplos de objetos
const perfil = {
    nome:'João',
    idade: 25,
    altura: 1.75,
    peso: 80,
    descricao: function() {
        return `${this.nome} tem ${this.idade} anos, ${this.altura}m de altura e pesa ${this.peso}kg`;
    }
}

perfil.nacionalidade = 'Brasileiro';

console.log(perfil.nome);
console.log(perfil.descricao());