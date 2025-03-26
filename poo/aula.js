class Carro {
  /**
   * @param {String} marca
   * @param {Number} ano
   * @param {String} cor
   */
  constructor(marca, ano, cor) {
    this.marca = marca;
    this.ano = ano;
    this.cor = cor;
  }

  ligar() {
    console.log(`${this.marca} está ligado! 🚗...`);
    console.log(`O ${this.marca} 🚗 é de ${this.ano}`);
  }

  desligar() {
    console.log(`${this.marca} está ligado! 🚗...`);
  }

  /**
   *
   * @param {String} cor
   */
  pintar(cor) {
    console.log(`Cor antiga: ${this.cor}`);
    this.cor = cor;
    console.log(`Nova cor: ${this.cor}`);
  }
}

class CarroEletrico extends Carro {
  /**
   *
   * @param {String} marca
   * @param {Number} ano
   * @param {String} cor
   * @param {Number} bateria
   * @param {Number} altura
   */
  constructor(marca, ano, cor, bateria, altura) {
    super(marca, ano, cor);
    this.bateria = bateria;
    this.altura = altura;
  }

  carregarBateria() {
    console.log(`A bateria do ${this.marca} está carregado! 🔋`);
  }

  mostrarAltura() {
    console.log(`A altura do ${this.marca} é: ${this.altura}`);
  }
}

let carro = new Carro("Toyota", 1550, "Azul");
// console.log(carro.marca);
// console.log(carro.ano);
// console.log(carro.cor);
carro.ligar();

console.log("\n");

let tesla = new CarroEletrico("Tesla", 2015, "Preto", 100, 1.2);
tesla.carregarBateria();
tesla.ligar();
tesla.pintar("Verde");
tesla.mostrarAltura();
