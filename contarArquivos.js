const sistema = {
  pasta1: {
    arquivo1: "arquivo",
    arquivo2: "arquivo",
    subpasta1: {
      arquivo3: "arquivo",
      arquivo4: "arquivo",
    },
    subpasta2: {
      arquivo5: "arquivo",
      arquivo6: "arquivo",
    },
  },
  pasta2: {
    arquivo7: "arquivo",
    arquivo8: "arquivo",
  },
};

function contarArquivos(estrutura) {
  quantidade = 0;

  if (typeof estrutura === "string") {
    return quantidade;
  } else {
    for (let arquivo in estrutura) {
      quantidade++;
      quantidade += contarArquivos(estrutura[arquivo]);
    }
  }
 
  return quantidade;
}

console.log(contarArquivos(sistema));
