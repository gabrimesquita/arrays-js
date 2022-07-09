let idades = [30, 35, 28]
let nomes = ["Ana", "Juliana", "Leonardo"]
let faculdade = [false, true, true]

let funcionarios = [nomes,idades,faculdade]

if (faculdade = true) {
    console.log("UFS")
}
    else {
    console.log("Estacio")
    }

console.log(`${funcionarios[0][0]}, que tem ${funcionarios[1][0]} anos, estuda na ${funcionarios[2][0]}`)