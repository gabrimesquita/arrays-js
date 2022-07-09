const alunos = ['Gabriel', 'Leo', 'Ju', 'Caio'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + 
        listaDeNotasEAlunos[1][indice];
    } else {
        return "aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Gabriel"))
console.log(exibeNomeNota("Caio"))
console.log(exibeNomeNota("Melissa"))