// // // PRIMEIRA FORMA DE FAZER LAÇO // // //

// Adivinhe o número

// Gerar número aleatório entre 0 e 10
let numeroOculto = Math.round(Math.random()*10)
let acertou = false
let chute
console.log(numeroOculto)

while (acertou == false) {
    chute = parseInt(prompt('Tente adivinhar o número'))
    if (chute == numeroOculto){
        acertou = true
        alert('Parabéns, você acertou!')    
    }
}


// Contar de 0 a 10

let numero = 0

while (numero<=10){
    console.log(numero)
    numero++ // numero = numero + 1 -->> isso se chama incrementar 
}

// Contar de 10 a 0

let numero = 10

while (numero>=0){
    console.log(numero)
    numero-- // numero = numero - 1 -->> isso se chama decrementar
}