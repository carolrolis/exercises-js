const arr = [1, 2, 3, 4, 5, 6, 7];


function retornarNumerosPrimos(array) {
  const arrPrimos = [];


  for (let numero of array) {
    let divisores = 0;
   
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores++;
      }
    }


    if (divisores === 2) {
      arrPrimos.push(numero);
    }
  }


  console.log(arrPrimos);
}


retornarNumerosPrimos(arr);
