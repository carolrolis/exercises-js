class Veiculo {
  constructor(marca, modelo, ano, placa, consumo) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.consumo = consumo;
  }
  calcularGasto() {
    this.gastoPorKm = 5.8 / this.consumo; // 5.8 é o preço do litro de gasolina
    this.gastoPorKm = this.gastoPorKm.toFixed(2); // método para ter apenas 2 números após a vírgula
    console.log(`Gasto por quilômetro: R$ ${this.gastoPorKm}`);
  }
}

class Carro extends Veiculo {
  calcularPreco() {
    this.precoBase = 30000;
    this.tarifa = 1000;
    super.calcularGasto(); // manter a lógica do método da classe mãe

    this.preco = this.precoBase + this.tarifa * this.gastoPorKm;
    console.log(`Preço do carro: R$ ${this.preco}.00`);
  }
}
class Moto extends Veiculo {
  calcularPreco() {
    this.precoBase = 10000;
    this.tarifa = 500;
    super.calcularGasto(); // manter a lógica do método da classe mãe

    this.preco = this.precoBase + this.tarifa * this.gastoPorKm;
    console.log(`Preço da moto: R$ ${this.preco}.00`);
  }
}

class Caminhao extends Veiculo {
  constructor(marca, modelo, ano, placa, consumo, peso) {
    super(marca, modelo, ano, placa, consumo);
    this.peso = peso;
  }
  calcularPreco() {
    this.precoBase = 100000;
    this.preco = ((this.precoBase * this.peso) / 4) * this.gastoPorKm;
    console.log(`Preço do caminhão: R$ ${this.preco}.00`);
  }
}

const carro1 = new Carro("Chevrolet", "Onix", "2023", "AAAAAAA", 16.5);
carro1.calcularGasto();
carro1.calcularPreco();

const moto1 = new Moto("Dafra", "Apache", "2017", "AAAAAAA", 40);
moto1.calcularGasto();
moto1.calcularPreco();

const caminhao1 = new Caminhao("a", "b", "2020", "AAAAAAA", 10, 200);
caminhao1.calcularGasto();
caminhao1.calcularPreco();
