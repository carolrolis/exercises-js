const produtos = [
  { nome: "Notebook Acer Nitro 5", tipo: "notebook", preco: 5800 },
  { nome: "Notebook Lenovo Ideapad", tipo: "notebook", preco: 4000 },
  { nome: "Notebook Dell G15", tipo: "notebook", preco: 5200 },
  { nome: "Notebook VAIO FE15", tipo: "notebook", preco: 3247 },
  { nome: "Mouse Gamer Razer", tipo: "mouse", preco: 177 },
  { nome: "Mouse Gamer Redragon", tipo: "mouse", preco: 94 },
  { nome: "Headset Havit HV-H2232d", tipo: "fone", preco: 95 },
  { nome: "Headset Havit HV-H2002d", tipo: "fone", preco: 200 },
  { nome: "Teclado Mecânico Logitech G515", tipo: "teclado", preco: 672 },
  { nome: "Teclado Gamer Membrana Redragon", tipo: "teclado", preco: 170 },
];

function merge(left, right, ordem) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (ordem === "crescente") {
      if (left[i].preco < right[j].preco) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    } else if (ordem === "decrescente") {
      if (left[i].preco > right[j].preco) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSort(array, ordem) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left, ordem);
  const sortedRight = mergeSort(right, ordem);

  return merge(sortedLeft, sortedRight, ordem);
}

console.log(mergeSort(produtos, "crescente"));
console.log(mergeSort(produtos, "decrescente"));
