function convertePolegada(polegada){
    const centimetro = 2.54;
    let resultado = polegada * centimetro;
    return resultado;
}

function converteurl(url){
    let resultado = "http//www." + url + ".com.br";
    return resultado;
}

function fraseExclamativa(frase){
    let resultado = frase + "!";
    return resultado;
}

function idadeCao(cachorro){
    const idade = 7;
    let resultado = idade * cachorro;
    return resultado;
}

function valorHora(salario){
    const horaMes = 160;
    let resultado = salario / horaMes;
    return resultado;  
}

function calculadoraIMC(altura, peso){
    let IMC = peso / (altura * altura);
    return IMC
}


function converteMaiuscula(minuscula){
    let maiuscula = minuscula.toUpperCase();
    return maiuscula
}

function verificaTipoDado(variavel){
    let resultado = typeof variavel;
    return resultado;
}

function circuferencia(raio){
    let resultado = 2 * Math.PI * raio;
    return resultado;
}


console.log("------------- chamada das funções----------------")
console.log("valor do cumprimento: " + convertePolegada(3) + " em centimetro");
console.log("Conversão para url: " + converteurl("ferreirinha"));
console.log("A frase exclamtiva é: " + fraseExclamativa("Bom dia"));
console.log("A idade do cachorro é: " + idadeCao(2));
console.log("O valor da minha hora de trabalho é: " + valorHora(16000));
console.log("O Valor do IMC é: " + calculadoraIMC(1.65, 70.00));
console.log("A frase convertida em maiúscula é: " + converteMaiuscula("ola"));
console.log("O tipo de dado é: " + verificaTipoDado(true));
console.log("O resultado da circunferência é: " + circuferencia(3));