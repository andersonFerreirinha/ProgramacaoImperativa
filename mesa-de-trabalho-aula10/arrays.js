let numeros = [22, 33, 54, 66, 72];
console.log(numeros[numeros.length]);//dá undefined por ultrapassar o índice

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyouna", "Patán"]]
console.log(grupoDeAmigos[1][0]);

let str = "una string qualquer";
let teste = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]];
console.log(teste[2][teste[2].length-1]);

console.log("*********** imprime iverso*************")
let imprime = [1, 2, 3, 4];
function imprimeInverso(array){
    return console.log(array[3], array[2], array[1], array[0]);
    
}
imprimeInverso(imprime);
console.log("*********** inverte array *************")
let invertendo = [1, 2, 3, 4];
function inverter(array){
    let inverso = [];
    inverso[0] = array[3];
    inverso[1] = array[2];
    inverso[2] = array[1];
    inverso[3] = array[0]; 
    return inverso;
}

console.log(inverter(invertendo));
console.log("********** somar *************")
let somar = [1,2,3]

function soma(array){
    soma = array[0] + array[1] + array[2];
    return soma;
}

console.log(soma(somar));
console.log("*********** join ***********")
let unir = ["o", "l", "á"]

function juntar(array){
    return console.log(array[0] + array[1] + array[2]); 
}
juntar(unir);

console.log("************ filmes maiuscula *************")

let filme = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"]

function maiuscula(array){
    let letra = [];
    letra[0] = array[0].toUpperCase();
    letra[1] = array[1].toUpperCase();
    letra[2] = array[2].toUpperCase();
    letra[3] = array[3].toUpperCase();
    letra[4] = array[4].toUpperCase();
    return letra;
}

console.log(maiuscula(filme));

console.log("************ lista completa *****************")

let animacao = ["toy story", "finding Nemo", "kung fu panda", "wally", "fortnite"];
excluido = animacao[4];
console.log("elemento excluido " + excluido);
animacao.pop();
function filmesCompletos(array1, array2){
    array1.push(array2[0]);
    array1.push(array2[1])
    array1.push(array2[2]);
    array1.push(array2[3]);
    //array1.push(array2[4]);
    
    return array1;
}

console.log(filmesCompletos(filme, animacao));

console.log("*********** compara *************")

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compara(array1, array2){
    let comparacao = [];
    comparacao[0] = array1[0] == array2[0]
    comparacao[1] = array1[1] == array2[2]
    comparacao[2] = array1[3] == array2[3]
    comparacao[3] = array1[4] == array2[4]
    comparacao[4] = array1[5] == array2[5]
    comparacao[5] = array1[6] == array2[6]
    comparacao[6] = array1[7] == array2[7]
    comparacao[7] = array1[8] == array2[8]
    return comparacao;
}

console.log(compara(asiaScores, euroScores));


