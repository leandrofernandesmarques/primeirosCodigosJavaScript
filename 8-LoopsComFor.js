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
const destino = `Maceió`

console.log("\nDestinos Possíveis:")
console.log(listaDeDestinos)

const podeComprar = idade >= 18 || menorAcompanhado == true

destinoExiste = false
for(let contador = 0; contador < listaDeDestinos.length ; contador++)//+=1 {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino Existe")
        destinoExiste = true
        break
    } else {
        console.log("Destino não existe")
    }
    
console.log ("Destino Existe: " , destinoExiste)
if (podeComprar && destinoExiste){
    console.log ("Boa Viagem!!")
}else{
    console.log("Requisitos Não preenchidos. Não pode comprar")
}
