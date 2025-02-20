const str = "Carol";

function mudarIndex(string, index) {
  if (index < 0) {
    return string;
  }

  let letras = string[index];

  console.log(letras);

  return mudarIndex(string, index - 1);
}

function inverterString(str) {
  return mudarIndex(str, str.length - 1);
}

inverterString(str);
