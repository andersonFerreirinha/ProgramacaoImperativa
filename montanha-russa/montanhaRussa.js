  
function podeSubir(altura, acompanhada){
    if(altura > 1.40 && altura < 2.00){
        return "pode subir";
    }

    if(altura < 1.40 && altura > 1.20 && acompanhada == true){
        return "pode subir";
    }

    if(altura < 1.20){
        return "não pode subir";
    }

    return "não pode subir";
}

// console.log(podeSubir(1.18, true));
function podeSubir(altura, acompanhada){
    if(altura > 1.40 && altura < 2.00){
        return "Acesso Autorizado";
    }
    if(altura < 1.40 && altura > 1.20 && acompanhada == true){
        return "Acesso Autorizado somente com Acompanhante";
    }
    if(altura < 1.20){
        return "Acesso Negado";
    }

    return "Acesso não Autorizado";

}

console.log(podeSubir(1.35, false));