// criação do construtor
function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    //  método calcular média que retorna a média das notas 
    this.calcularMedia = function () {
        let = totalDeNotas = 0;
        let = somaNotas = 0;
        for (i = 0; i < this.notas.length; i++) {
            totalDeNotas++;
            somaNotas = somaNotas + this.notas[i];
        }
        let mediaNotas = (somaNotas / totalDeNotas);
        return mediaNotas;
    };
    // método que aumenta o número de faltas
    this.Aumentafaltas = function () {
        this.faltas = this.faltas + 1;
        return this.faltas;
    }

}
//Teste dos métodos do aluno
//  let aluno1 = new Aluno("Anderson Ferreira", 0, [10, 10, 10, 10, 10]);
//  let aluno2 = new Aluno("Luciene Oliveira", 3, [5, 7, 8, 6, 10]);
//  console.log(aluno2.calcularMedia());
//  console.log(aluno2.Aumentafaltas());
//  console.log(aluno1.Aumentafaltas());

module.exports = Aluno;





