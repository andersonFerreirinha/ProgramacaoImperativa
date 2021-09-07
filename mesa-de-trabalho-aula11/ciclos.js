
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function maiuscula(peliculas) {
    for (let i = 0; i < peliculas.length; i++) {
        peliculas[i] = peliculas[i].toUpperCase();


    }

    return peliculas;

}

console.log(maiuscula(peliculas));

listaOriginal = ["filme4", "filme5", "filme6"];
listaInfantil = ["filmes3", "filme2", "filme1"];


function lista(listaOriginal, listaInfantil) {
    for (let f = 0; f <= listaInfantil.length - 1; f++) {
        listaOriginal.unshift(listaInfantil[f]);
    }


    return listaOriginal;
}

console.log(lista(listaOriginal, listaInfantil));

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacao(asia, europa) {
    let comparacaoAsiaEuropa = []
    for (let c = 0; c <= euroScores.length; i++) {
        comparacaoAsiaEuropa[i] = asia[i] === europa[i]
    }
    return comparacaoAsiaEuropa;
}
console.log(asiaScores, euroScores);

console.log("*************** Conteudo extra ******************");

let = participanteA = [5, 8, 4, 9, 5];
let = participanteB = [8, 7, 8, 6, 8];
let = participanteC = [7, 5, 10, 8, 3];

console.log("Participante A, notas: " + participanteA + "\n" + "Participante B, notas: " + participanteB + "\n" + "Participante B, notas: " + participanteC);

function pontuacaoMedia(participante) {
    let soma = 0;
    for (let p = 0; p < participante.length; p++) {
        soma = participante[p] + soma;
    }

    return resultado = soma / participante.length;
}
console.log("A média do participante é: " + pontuacaoMedia(participanteA));

function pontuacaoMaior(participante) {
    var max = participante.reduce(function (numero1, numero2) {
        return Math.max(numero1, numero2);
    });
    return max;
}

console.log("A nota maior do participante é: " + pontuacaoMaior(participanteA));

function competicao(participante1, participante2, participante3) {

    if (pontuacaoMedia(participante1) > pontuacaoMedia(participante2) && pontuacaoMedia(participante1) > pontuacaoMedia(participante3)) {
        console.log("participante A " + "ganhou pela pontuação média " + pontuacaoMedia(participante1));
    } else if (pontuacaoMedia(participante2) > pontuacaoMedia(participante3)) {
        console.log("participante B " + "ganhou pela pontuação média " + pontuacaoMedia(participante2));
    } else {
        console.log("participante C " + "ganhou pela pontuação média " + pontuacaoMedia(participante3))
    }

    if (pontuacaoMaior(participante1) > pontuacaoMaior(participante2) && pontuacaoMaior(participante1) > pontuacaoMaior(participante3)) {
        console.log("participante A " + "ganhou pela pontuação maior " + pontuacaoMaior(participante1));
    } else if (pontuacaoMaior(participante2) > pontuacaoMaior(participante3)) {
        console.log("participante B " + "ganhou pela pontuação maior " + pontuacaoMaior(participante2));
    } else {
        console.log("participante C " + "ganhou pela pontuação maior " + pontuacaoMaior(participante3))
    }

}

competicao(participanteA, participanteB, participanteC);