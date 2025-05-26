let numeros = []; //Vetor dos números
let numero = 0; //Variável que vai pedir o valor de cada número
let semDupli = []; //Variável dos números sem duplicata
let quantidadeSemDupli = 0; //Variável da quantidade de números sem duplicados que já foram encontrados

for (let i = 0; i < 10; i++) { //Looping que vai pedir os números
    numero = parseFloat(prompt(`Digite o valor do ${i + 1}° número`))
    while (isNaN(numero)){ //Valor que vai checar se o valor digitado é um número
        numero = parseFloat(prompt(`Digite o valor do ${i+1}° número`))
    }
    numeros [i] = numero //Armazenar os valores do número em números
}

for (let i = 0; i < 10; i++) { //Looping para checar se existem duplicatas
    let jaExiste = false //Variável que vai checar se o número já existe no vetor
    for (let j = 0; j < quantidadeSemDupli; j++) { //For alinhado para checar se o jaExiste é verdadeiro
        if (semDupli[j] === numeros[i]) { //Se o semDupli j já possuir o número i o já existe é true
            jaExiste = true
            break
        }
    }

    if (!jaExiste) { //Se o já existe for falso, ou seja, não tiver nenhum daquele número na variável, ele vai acrescentar esse valor no semDupli
        semDupli[quantidadeSemDupli] = numeros[i] //Vai acrescentar do número i no semDupli
        quantidadeSemDupli++ //Vai aumentar a quantidade de semDupli 
    }
}

alert(`Os números que você digitou foram: ${numeros}. Sem duplicatas: ${semDupli}`) //Alerta de resultados