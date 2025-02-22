const listaTarefas = [
  { tarefa1: "Ana", prioridade: 2 },
  { tarefa2: "Carolina", prioridade: 1 },
  { tarefa3: "de", prioridade: 1 },
  { tarefa4: "Sousa", prioridade: 2 },
  { tarefa5: "Furtado", prioridade: 3 },
];

function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].prioridade < pivot.prioridade) left.push(array[i]);
    else right.push(array[i]);
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  const resultado = [...sortedLeft, pivot, ...sortedRight];

  return resultado;
}

console.log(quickSort(listaTarefas));
