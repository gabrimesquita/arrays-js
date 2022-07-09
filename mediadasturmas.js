const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const mediaSala = notasDasSalas => { 
    const somaDasNotas = notasDasSalas.reduce((acumulador, atual) =>
    atual + acumulador, 0);
    return somaDasNotas / notasDasSalas.length;
}

console.log(`Media da sala de JS: ${mediaSala(salaJS)}`)
console.log(`Media da sala de Java: ${mediaSala(salaJava)}`)
console.log(`Media da sala de Python: ${mediaSala(salaPython)}`)

const media = (mediaSala(salaJS) + mediaSala(salaJava) + mediaSala(salaPython)) / 3

console.log(media)