class Carro {
  /**
   *
   * @param {String} marca Marca do carro
   * @param {String} modelo Modelo do carro
   * @param {Number} ano Ano de fabricação do carro
   * @param {String} cor Cor do carro
   * @param {Number} preco Preço do carro
   */
  constructor(marca, modelo, ano, cor, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
  }

  descrever() {
    console.log(
      `Este é um ${this.marca} ${this.modelo} ano ${this.ano}, na cor ${
        this.cor
      } e custa R$${this.preco.toLocaleString()}`
    );
  }
}

class CarroNovo extends Carro {
  /**
   *
   * @param {String} marca Marca do carro
   * @param {String} modelo Modelo do carro
   * @param {Number} ano Ano de fabricação do carro
   * @param {String} cor Cor do carro
   * @param {Number} preco Preço do carro
   * @param {String} garantia Período de garantia do carro
   */
  constructor(marca, modelo, ano, cor, preco, garantia) {
    super(marca, modelo, ano, cor, preco);
    this.garantia = garantia;
  }

  ofertaEspecial() {
    console.log(
      `Aproveite a oferta especial para o novo ${this.marca} ${this.modelo}!`
    );
    console.log(`Por apenas R$${(this.preco - 500).toLocaleString()},`);
    console.log(`você leva o carro com ${this.garantia} de garantia!`);
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2020, "Prata", 80000);
const carro2 = new CarroNovo("Honda", "Civic", 2021, "Preto", 90000, "3 anos");

carro1.descrever();
carro2.descrever();
carro2.ofertaEspecial();
