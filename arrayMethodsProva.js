// =============================== PRIMEIRA QUESTÃO ===============================
const tripulacao = [
  { nome: "Carol", cargo: "Capitã" },
  { nome: "Lia", cargo: "Vice-capitã" },
  { nome: "Lara", cargo: "Técnico-administrativo" },
  { nome: "Yasmin", cargo: "Marketing" },
  { nome: "Júnior", cargo: "Recepcionista" },
  { nome: "Priscila", cargo: "Auxiliar de recepção" },
  { nome: "Alan", cargo: "Estoquista" },
  { nome: "Ártemis", cargo: "Chef de Cozinha" },
  { nome: "Pedro", cargo: "Auxiliar de Cozinha" },
  { nome: "Tiago", cargo: "Analista de Alimentos" },
  { nome: "Eduarda", cargo: "Garçonete" },
  { nome: "Ian", cargo: "Garçom" },
];

function adicionarTripulante(nome, cargo) {
  tripulacao.push({ nome, cargo });
  console.log(
    `Tripulante ${nome} de cargo ${cargo} adicionado(a) à tripulação.`
  );
}

function removerTripulante(nome) {
  for (let i = 0; i < tripulacao.length; i++) {
    if (tripulacao[i].nome === nome) {
      console.log(
        `Tripulante ${tripulacao[i].nome} removido(a) da tripulação.`
      );
      tripulacao.splice(i, 1);
      break;
    }
  }
}

function substituirTripulante(nome1, nome2, cargo2) {
  for (let i = 0; i < tripulacao.length; i++) {
    if (tripulacao[i].nome === nome1) {
      console.log(
        `Tripulante ${nome1} substituído(a) por ${nome2} de cargo ${cargo2}`
      );
      tripulacao.splice(i, 1, { nome: nome2, cargo: cargo2 });
    }
  }
}

function criarSubgrupo(nome1, nome2) {
  let nomeInicio, nomeFim;
  for (let i = 0; i < tripulacao.length; i++) {
    if (tripulacao[i].nome === nome1) {
      nomeInicio = i;
    }
    if (tripulacao[i].nome === nome2) {
      nomeFim = i + 1; // + 1 pois o usuário geralmente não sabe que o parâmetro de parada do slice não é inclusivo. Para parar antes do nome enviado, seria apenas 'nomeFim = i'.
    }
  }
  return tripulacao.slice(nomeInicio, nomeFim);
}

function gerenciarTripulacao() {
  let opcao = prompt(
    "Escolha uma opção de alteração na tripulação. \n1. Adicionar tripulante\n2. Remover tripulante\n3. Substituir tripulante\n4. Visualizar subgrupo"
  );
  if (opcao === "1") {
    let tripulanteNome = prompt(
      "Insira o nome do tripulante a ser adicionado."
    );
    let tripulanteCargo = prompt(
      "Insira o cargo do tripulante a ser adicionado."
    );
    adicionarTripulante(tripulanteNome, tripulanteCargo);
    console.log("Lista atualizada:");
    console.table(tripulacao);
  } else if (opcao === "2") {
    let tripulanteNome = prompt("Insira o nome do tripulante a ser removido.");
    removerTripulante(tripulanteNome);
    console.log("Lista atualizada:");
    console.table(tripulacao);
  } else if (opcao === "3") {
    let tripulanteNome1 = prompt(
      "Insira o nome do tripulante a ser substituído."
    );
    let tripulanteNome2 = prompt("Insira o nome do novo tripulante.");
    let cargo = prompt("Insira o cargo do novo tripulante.");
    substituirTripulante(tripulanteNome1, tripulanteNome2, cargo);
    console.log("Lista atualizada:");
    console.table(tripulacao);
  } else if (opcao === "4") {
    let nome1 = prompt(
      "A partir de qual tripulante você quer visualizar uma sublista?"
    );
    let nome2 = prompt("Até qual tripulante?");
    let sublista = criarSubgrupo(nome1, nome2);
    console.log("Sublista:");
    console.table(sublista);
  } else {
    alert("Insira uma opção válida.");
  }
}

gerenciarTripulacao();
