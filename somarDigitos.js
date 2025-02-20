function somarDigitos(n) {
  if (n < 1) {
    return 0;
  }

  return somarDigitos(Math.floor(n / 10)) + n % 10;
}

console.log(somarDigitos(166));
