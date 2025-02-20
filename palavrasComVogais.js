const str = "roxo amarelo laranja verde violeta azul indigo";

function inicioVogal(string) {
  const palavras = string.split(" ");
  const vogais = "aeiou";
  let palavrasInicioVogal = [];
  let palavrasQuantidade = 0;

  for (let vogal of vogais) {
    for (let palavra of palavras) {
      if (palavra[0] === vogal) {
        palavrasInicioVogal.push(palavra);
        palavrasQuantidade++;
      }
    }
  }

  console.log(
    "Palavras que iniciam com uma vogal: " + palavrasInicioVogal.join(", ")
  );
  console.log("Total: " + palavrasQuantidade);
}

inicioVogal(str);
