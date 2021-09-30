// importação do objeto aluno
const Aluno = require("./aluno.js");
// criação dos objetos com as propriedades nome, faltas e notas
let aluno1 = new Aluno("Anderson Ferreira", 0, [10, 10, 10, 10, 10]);
let aluno2 = new Aluno("Luciene Oliveira", 3, [5, 7, 8, 6, 10]);
let aluno3 = new Aluno("Junior Santos", 2, [4, 6, 7, 7, 8]);
let aluno4 = new Aluno("José Pereira", 5, [5, 7, 9, 8, 9]);
let aluno5 = new Aluno("Maria Martins", 8, [6, 8, 5, 4, 3]);
let aluno6 = new Aluno("Vanessa Santos", 5, [3, 5, 10, 10, 10]);
let aluno7 = new Aluno("João Pereira", 3, [8, 7, 9, 5, 6]);
let aluno8 = new Aluno("Amanda", 1, [8, 2, 9, 7, 7]);
// criação do objeto literal curso com os atributos nome, nota de aprovação, faltas máximas e lista de estudante
let curso = {
    nome: "curso",
    notaAprovacao: 7,
    faltasMaximas: 5,
    estudantes: [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7],
// método que adiciona alunos na lista de estudantes
    adicionaAluno: function (aluno) {
        this.estudantes.push(aluno);
    },
// método que retorna se o aluno foi aprovado ou não.
    situacao: function (aluno) {
        if (aluno.faltas === this.faltasMaximas && aluno.calcularMedia() >= 1.1 * this.notaAprovacao) {
            return true;
        }
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
            return true;
        } else {
            return false;
        }
    },
// método que retorna o array de booleanos com os resultados de aprovação dos alunos.
    listaSituacao: function () {
        lista = [];
        for (let i = 0 ; i < this.estudantes.length; i++) {
            lista.push(curso.situacao(this.estudantes[i]));
        }
        return lista;
    }
}
// Teste dos métodos
curso.adicionaAluno(aluno8);
console.log(curso.estudantes);
console.log(curso.situacao(aluno6));
console.log(curso.listaSituacao());