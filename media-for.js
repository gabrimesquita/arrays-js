const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (i = 0; i < notas.length; i++){
    console.log(i + 1, notas[i])
    somaDasNotas += notas[i]
    //somaDasNotas = somaDasNotas + notas[i]
}

//let media = somaDasNotas / notas.length

function media(){
    return somaDasNotas / notas.length
}


console.log(media())

