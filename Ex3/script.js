let numeros = [] //Variável do vetor dos números
let numero = 0; //Variável que vai pedir o número para se comparar
let numeroComparar
let quantidadeNumero = 0;
let mensagem = [] //Variável da mensagem

for (let i = 0; i < 10; i++) { //Looping para pedir os números
    numero = parseInt(prompt(`Digite o valor do ${i + 1}° número`)) //Variável que vai pedir os números
    while (isNaN(numero)) { //Valor que vai pedir o número de novo caso não seja um número
        numero = parseInt(prompt(`Digite o valor do ${i + 1}° número`))
    }
    numeros [i] = numero
}
    numeroComparar = parseInt(prompt("Digite um número para comparar")) //Valor que vai pedir o número para se comparar
    while (isNaN(numeroComparar)) { //Valor que vai pedir o número de novo caso não seja um número
        numeroComparar = parseInt(prompt("Digite um número para comparar"))
    }

for (let i = 0; i < 10; i++) { //Looping para checar o valor dos números e comparar
    if (numeroComparar == numeros[i]) { //Se o número para se comparar for igual o número i, a quantidade de número sobe e acrescenta o valor na mensagem
        mensagem [quantidadeNumero] = numeros[i] 
        quantidadeNumero ++
    }
}

alert(`Esse número apareceu ${quantidadeNumero} vezes e foram ${mensagem}`) //Alerta dos números
