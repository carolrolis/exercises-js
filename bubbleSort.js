function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array[j + 1]);
      if (array[j] > array[j + 1]) {
        let temporario = array[j];  
        array[j] = array[j + 1];
        array[j + 1] = temporario;
      }
    }
  }

  return array;
}

const notas = [8, 7, 6, 5, 4, 9, 2];
console.log(bubbleSort(notas));

/*
Explicação

> Primeira iteração do for dentro do outro for:
i = array[0], j = array[0] ---> i = 8, j = 8
se array[j] > array[j + 1] --> se array[0] > array[1], no caso, 8 e 7
armazena-se 8 em uma variável temporária.
atribui array[1], ou seja, 7, a array[0].
atribui o 8 armazenado ao array[1].
nisso, as posições são trocadas e o número menor vai para antes do maior.

*/
