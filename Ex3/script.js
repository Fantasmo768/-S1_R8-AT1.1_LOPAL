let numeros = [] //Vetor dos números

for (let i = 0; i < 7; i++) { //Looping para gerar os números
    numeros [i] = Math.floor(Math.random () * 10) //números que serão gerados
}

alert (`Os números gerados foram ${numeros}`) //Alerta dos números