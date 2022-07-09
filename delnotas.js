const notas = [10, 7, 8, 5, 10]
notas.pop();
notas.shift();
console.log(notas);

function nomeDoAluno(nome){
    return nome
}

let  media = (notas[0] + notas[1] + notas[2] ) / notas.length

console.log(`A média do aluno ${nomeDoAluno("Gabriel")} é ${media}`)
