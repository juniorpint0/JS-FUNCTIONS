//Function expression
const increment1 = function(n) {
    return n + 1
}

// Arrow Function is always anonymous
const increment2 = (n) => { // Sempre uma função Arrow é uma função anonima
    return n + 1
}

const increment3 = n => { // Quando a função tem um único parâmetro, pode-se tirar os parenteses.
    return n + 1
}

const increment4 = n => n + 1 // Versão mais simplificada, a palavra return fica implícita.

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b) => a + b //Quando se tem mais de um parâmetro, tem que usar parenteses.
console.log(sum(3, 8))

