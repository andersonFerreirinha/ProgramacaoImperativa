const alice = [ 0, 82, 132 ]
const bob = [ 0, 82, 132]

var alicePontos=0;
var bobPontos=0;
var vencedor = "";

function encontrarGanhador(a, b) {
    for (i=0; i<a.length; i++){
        if (a[i]>b[i]){
            alicePontos++
        } else if (a[i]<b[i]) {
            bobPontos++
        } else{
            console.log("empate");

        }
    }
}
encontrarGanhador(alice, bob);

if (alicePontos>bobPontos){
 vencedor = "Alice é o vencedor"} else {vencedor = "Bob é o vencedor"}

console.log(vencedor);

console.log("************ Conteúdo Extra ****************")

function digitalHouse(n, n2){
    for(i = 0; i <= 100; i++){
        if(i % n == 0){
            console.log("Digital");
        } 
        
        if(i % n2 == 0)
         console.log("House");
    }

}

(digitalHouse(2, 3));