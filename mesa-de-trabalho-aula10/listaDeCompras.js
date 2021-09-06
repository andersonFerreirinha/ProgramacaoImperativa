let compras = ['Feijão', 'Arroz', 'Óleo', 'Macarrão', 'Molho de Tomate', 'Sal', 'Açucar'];
let separacao = compras.join(" - ");
console.log("**** O método Join faz a união de elementos através de um separador que for especificado ****")
console.log(separacao);
console.log("**** O método pop exclui o elemento no final do array e retorna o elemento excluido****");
console.log(compras.pop());
console.log("**** O metodo push diciona um elemento ao final do array e retorna o comprimento do array");
compras.push('Laranha');
console.log(compras);
console.log("**** O método shift exclui um elemento no inicio do array e retorna o item excluido")
console.log(compras.shift());
console.log(compras);
console.log("**** O método unshift adiciona um ou mais elementos no inicio do array e retorna o novo comprimento do array");
console.log(compras.unshift("Feijão", "Açucar"));
console.log(compras);
