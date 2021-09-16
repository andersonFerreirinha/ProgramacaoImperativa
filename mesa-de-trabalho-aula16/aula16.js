/* 
Filipe Campos Fontes
Jeferson Oliveira
Anderson Ferreira N dos Santos
Anderson A. Souza (ANDY)
José Lucas Souza Suares
Adilane Pereira
Iago Mendes
*/

/* Solução 1 a primeira */

const fizzBuzz = (numA, numB) => {
  let n = 1;

  while (n <= 100) {
    if (n % numA == 0 && n % numB == 0) {
      console.log(n + " FizzBuzz");
    } else if (n % numB == 0) {
      console.log(n + " Buzz");
    } else if (n % numA == 0) {
      console.log(n + " Fizz");
    } else {
      console.log(n);
    }
    n++;
  }
};

fizzBuzz(5, 3);

/* Solução 2 a segunda */

const multiplo = (n, n2) => {   
    for(let i = 1; i <=100; i++){
        if(i % n == 0 && i % n2 == 0){
            console.log(i," FizzBuzz");
        } else if (i % n == 0){
            console.log(i," Fizz");
        } else if (i % n2 == 0){
            console.log(i," Buz");
        } else {
            console.log(i)
        }
    }
}

multiplo(3,4);
