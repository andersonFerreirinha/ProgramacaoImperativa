console.log(Math.random());

function cumprimentar(nome){
// console.log("Olá seja bem vindo " + nome)
const mensagem = "Olá, seja bem vindo!";
console.log(mensagem + nome);
}
cumprimentar("Anderson");

function multiplicarPorDoisESomarCinco(x){
    return 2 * x + 5;
}

console.log(multiplicarPorDoisESomarCinco(1));
console.log(multiplicarPorDoisESomarCinco(5));
// console.log(multiplicarPorDoisESomarCinco(Erik)); Erik não é um número, por isso dá erro.
const Erik = 5;
console.log(multiplicarPorDoisESomarCinco(Erik)); //agora dá certo.
