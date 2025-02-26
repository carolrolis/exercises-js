function calcularPotencia(num, pot) {
  if (pot === 0) {
    return 1;
  }

  return num * calcularPotencia(num, pot - 1);
}

function gerenciar() {
  let numero = prompt("Insira um número.");
  let potencia = prompt("Insira uma potência.");
  return calcularPotencia(numero, potencia);
}

alert("Resultado: " + gerenciar());
