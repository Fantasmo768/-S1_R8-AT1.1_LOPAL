let numeros = [] //Variável para declarar o valor do vetor dos números
let numero = 0; //Valor dos números que ele irá pedir
let soma = 0; //Valor da soma

for (let i = 0; i < 10; i++) { //Looping para pedir o número e fazer o cálculo
    numero = parseFloat(prompt(`Digite o valor do ${i + 1}° número`)) //Variável para pedir os números
    while (isNaN(numero)) { //Looping para checar se o valor é um número e vai pedir de novo caso não seja
        numero = parseFloat(prompt(`Digite o valor do ${i + 1}° número`))
    }
    numeros[i] = numero
}

for (let i = 0; i < 10; i++) { //Looping para realizar a soma dos números
    if (numeros [i]%2 == 0) { //Se o número for par
        soma += numeros [i]
    }
}

alert(`Os números digitados foram: ${numeros} e a soma dos números pares digitados é: ${soma}`) //Alerta de resultados 