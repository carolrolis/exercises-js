class Sistema {
  constructor(lista) {
    this.lista = lista;
  }

  adicionarUsuario(usuario) {
    this.lista.push(usuario);

    console.log(this.lista);
    /*
    (2) [Usuario, Usuario]
    0: Usuario
    nome: "Carol"
    idade: 19
    cpf: "00000000003"
    genero: "Feminino"
    <constructor>: "Usuario"
    1: Usuario
    nome: "Maria"
    idade: 15
    cpf: "00000000011"
    genero: "Feminino"
    <constructor>: "Usuario"
    */
  }

  removerUsuario(usuario) {
    const index = this.lista.indexOf(usuario);
    this.lista.splice(index, 1);
  }
}

const lista = new Sistema([]);

class Usuario {
  constructor(nome, idade, cpf, genero) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.genero = genero;
    lista.adicionarUsuario(this);
  }

  exibir() {
    console.log(
      `Nome: ${this.nome}
Idade: ${this.idade}
CPF: ${this.cpf}
Gênero: ${this.genero}`
    );
  }

  alterar(nome2, idade2, cpf2, genero2) {
    this.nome = nome2;
    this.idade = idade2;
    this.cpf = cpf2;
    this.genero = genero2;

    console.log(
      `Nome: ${this.nome}
Idade: ${this.idade}
CPF: ${this.cpf}
Gênero: ${this.genero}`
    );
  }
}

const usuario = new Usuario("Ricardo", 16, "00000000001", "Masculino");
usuario.exibir();
usuario.alterar("Julia", 18, "00000000002", "Feminino");
usuario.alterar("Carol", 19, "00000000003", "Feminino");

const usuario2 = new Usuario("Maria", 15, "00000000011", "Feminino");
usuario2.exibir();

lista.removerUsuario("Maria");
/*
(1) [Usuario]
0: Usuario
nome: "Carol"
idade: 19
cpf: "00000000003"
genero: "Feminino"
<constructor>: "Usuario"
*/
