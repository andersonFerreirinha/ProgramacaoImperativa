const alice = [0, 82, 132]
const bob = [0, 82, 132]

var alicePontos = 0;
var bobPontos = 0;
var vencedor = "";

function encontrarGanhador(a, b) {
    for (i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePontos++
        } else if (a[i] < b[i]) {
            bobPontos++
        } else {
            console.log("empate");

        }
    }
}
encontrarGanhador(alice, bob);

if (alicePontos > bobPontos) {
    vencedor = "Alice é o vencedor"
} else {
    vencedor = "Bob é o vencedor"
}

console.log(vencedor);

console.log("************ Conteúdo Extra ****************")

function digitalHouse(n, n2) {
    for (i = 0; i <= 100; i++) {
     if (i % n == 0 && i % n2 == 0) {
        console.log(i + " Digital House");
    } else if(i % n == 0) {
            console.log(i +" Digital");
        }else if(i % n2 == 0) {
            console.log(i + " House");
        }  

    }
}



(digitalHouse(2, 3));

console.log("*********** somaArray ************")
soma = [1, 2, 3, 5, 6, 7];

function somaArray(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado = array[i] + resultado;

    }
    return resultado
}
console.log(somaArray(soma));


console.log("************* join *********************")
let frase = ["S", "i", "n", "d", "i", "c", "a", "t", "o"];

function unir(array) {
    let palavra = "";
    for (let i = array.length - 1; i >= 0; i--) {
        palavra = array[i] + palavra;

    }
    return palavra

}
console.log(unir(frase));