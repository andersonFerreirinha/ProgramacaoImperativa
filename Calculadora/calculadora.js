function adicionar(soma1, soma2){
    let resultado = soma1 + soma2;
    return resultado;

}
function subtracao(subtrai1, subtrai2){
    let resultado = subtrai1 - subtrai2;
    return resultado;
}

function multiplicacao(multiplica1, multiplica2){
    let resultado = multiplica1 * multiplica2;
    return resultado;
}

function divisao(divide1, divide2){
    if(divide1 == 0 || divide2 == 0){
        return 0;
    }
    let resultado = divide1 / divide2;
    return resultado;
}

function quadradoDoNumero(numero){
    let resultado = multiplicacao(numero, numero);
    return resultado;

}

function mediaDeTres(numero, numero2, numero3){
    let soma = adicionar(numero, numero2) + numero3;
    let resultado = divisao(soma, 3);
    return resultado;

}

function calculaPorcentagem(total, porcentagem){
    let resultado = total * (porcentagem / 100);
    return resultado;

}

function geradorDePorcentagem(numero, numero2){
    let resultado = numero / numero2 * 100;
    return resultado;
}


console.log("------------- Teste de Operações / Calculadora ----------------------");
console.log("valor da adição: " + adicionar(10, 5));
console.log("valor da subtração: " + subtracao(10, 5));
console.log("valor da multiplicação: " + (multiplicacao(10, 5)));
console.log("valor da divisisão: " + divisao(10, 2));
console.log("valor do quadrado de um número: " + (quadradoDoNumero(5)))
console.log("valor da calculadora por Porcentagem " + calculaPorcentagem(300, 15));
console.log("valor gerador de Porcentagem " + geradorDePorcentagem(2, 200));
console.log("valor média de três números " + mediaDeTres(10, 10, 10));
