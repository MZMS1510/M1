class Pessoa {
  /**
   *
   * @param {String} nome
   * @param {Number} idade
   */
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

let marcos = new Pessoa("Marcos", 17);
marcos.saudacao();

class Estudante extends Pessoa {
  /**
   *
   * @param {String} nome
   * @param {Number} idade
   * @param {String} curso
   */
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }

  info() {
    console.log(`${this.nome} está estudando ${this.curso}`);
  }
}

let felipe = new Estudante("Felipe", 21, "Ciências da Computação");
felipe.info();
