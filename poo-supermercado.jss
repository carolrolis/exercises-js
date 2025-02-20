class Produto {
  #nome;
  #preco;
  #categoria;
  constructor(nome, preco, categoria) {
    this.#nome = nome;
    this.#preco = preco;
    this.#categoria = categoria;
  }

  get nome() {
    return this.#nome;
  }

  get preco() {
    return this.#preco;
  }

  get categoria() {
    return this.#categoria;
  }

  calcularPreco() {
    return this.#preco;
  }

  exibirDetalhes() {
    return `Nome: ${this.#nome} || Preço: R$${this.#preco.toFixed(
      2
    )} || Categoria: ${this.#categoria}`;
  }
}

class Promocao extends Produto {
  #desconto;

  constructor(nome, preco, categoria, desconto) {
    super(nome, preco, categoria);
    this.#desconto = desconto;
  }

  get desconto() {
    return this.#desconto;
  }

  calcularPreco() {
    return this.preco * (1 - this.#desconto / 100);
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()} || Desconto: ${this.#desconto}%`;
  }
}

class Supermercado {
  #nome;
  #produtos;

  constructor(nome, produtos) {
    this.#nome = nome;
    this.#produtos = [];
  }

  adicionarProduto(produto) {
    this.#produtos.push(produto);
  }

  listar() {
    return this.#produtos.map((produto) => produto.exibirDetalhes()).join("\n");
  }

  calcularTotal() {
    let total = 0;

    this.#produtos.forEach((produto) => {
      total += produto.calcularPreco();
    });

    return total;
  }
}

const supermercado = new Supermercado("Supermercado Central");

const arroz = new Produto("Arroz", 10, "Grãos");
const feijao = new Produto("Feijão", 15, "Grãos");
const chocolate = new Promocao("Chocolate", 8, "Doces", 20);

supermercado.adicionarProduto(arroz);
supermercado.adicionarProduto(feijao);
supermercado.adicionarProduto(chocolate);

console.log(supermercado.listar());
console.log(`Total: R$${supermercado.calcularTotal().toFixed(2)}`);
