
// criação da classe
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}
//criação da classe
class poder {
    constructor(magia) {
        this.magia = magia; 
    }
    
    // criação do Método atacar para usar o poder
        atacar(tipo, magia,idade) {
        //posso chamar fora do metodo ou dentro do metodo atacar
        console.log(`O ${tipo} atacou usando ${magia} com apenas ${idade} anos de idade!`);
        }
}

// Criando um herói
let marvel = new Heroi('TechVanguard', '240', 'Mago');

// Criando um poder
let poderHeroi = new poder('magia');

//Utilizando o método atacar
poderHeroi.atacar(marvel.tipo, poderHeroi.magia,marvel.idade);

//posso chamar fora do metodo ou dentro do metodo atacar
//console.log(`O ${marvel.tipo} atacou com ${poderHeroi.magia} com apenas ${marvel.idade} anos de idade!`);



























