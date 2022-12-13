console.log("Trabalhando com Loops")
const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Maceió`,
    `Belo Horizonte`,
    `Salvador`
)

const idade = 18
const menorAcompanhado = false
let passagemComprada = false
const destino = `Salvador`

console.log("\nNo momento da Compra:")
console.log("Existe o destino. Pode comprar?")
console.log(listaDeDestinos)

console.log("\nNo momento da Compra:")
console.log("Destinos Possíveis")
console.log(listaDeDestinos)

if (idade >= 18 || menorAcompanhado == true) {
    console.log("Passagem vendida!!")
    listaDeDestinos.splice(1, 1)
    passagemComprada = true
    console.log("\nDestinos Possíveis")
    console.log(listaDeDestinos)


} else {
    console.log("Passagem não pode ser vendida.")
    console.log("\nDestinos Possíveis")
    console.log(listaDeDestinos)
}



console.log("\nNo momento do Embarque:")


if (idade >= 18 && passagemComprada == true) {
    console.log("Boa Viagem!!")

} else {
    console.log("Não pode embarcar")

}


