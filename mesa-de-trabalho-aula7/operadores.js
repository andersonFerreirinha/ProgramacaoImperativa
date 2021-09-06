console.log(!true);
console.log(!false);
console.log("teste " + !!false);
console.log("teste1 " + !!true);
console.log("teste2 " + !1);
console.log("teste3 " + !!1);
console.log("teste4 " + !0);
console.log("teste5 " + !!0);
console.log("teste6 " + !!"");

let x = 5;
let y = 9;
// console.log(x < 10 && x! == 5);
console.log(x > 9 && x === 5);
console.log(!(x === y));

console.log(!(x =="3" || x === y) && !(y !== 8 && x <= y));

let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));

function imc(altura, peso){
    let imc = peso / (altura * altura);

    if(imc < 18.5){
        return "Seu imc é: " + imc + " e você está abaixo do peso";
    }

    if(imc >= 18.5 && imc <= 24.99){
        return "Seu imc é: " + imc + " e você stá com o peso normal";
}

    if(imc >= 25 && imc <= 29.99){
        return "Seu imc é: " + imc + "e você está com sobrepeso";
}

    if(imc >= 30 && imc <= 34.99){
        return "Seu imc é: " + imc + "e você está com Obesidade Grau I";
}
    if(imc >= 35 && imc <= 39.99){
        return "Seu imc é: " + imc + "e você está com Obesidade Grau II";
}

    if(imc > 40){
        return "Seu imc é: " + imc + "e você está com Obesidade Grau III ou Mórbida";
    }

}

console.log(imc(1.65, 68));