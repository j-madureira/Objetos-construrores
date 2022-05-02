

function criarAluno(nome,n1,n2){
       return {
               nome: nome,
               nota1: n1,
               nota2: n2,
               media: function(){
                     return (this.nota1 + this.nota2)/2
              }
       }
}


var alunos = [
       criarAluno("João",7,9),
       criarAluno("Jonanthan",6,5),
       criarAluno("Isabele",3,9)
];

var aluno1 = alunos[0];
console.log(`Aluno: ${aluno1.nome} - Nota1: ${aluno1.nota1} - Nota2: ${aluno1.nota2} - Média Final: ${aluno1.media()}`);

