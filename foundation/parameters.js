function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5) // Nesse caso ele vai ignorar o 4 e 5 parâmetro
logParams(1, 2, 3)
logParams(1, 2) // Nesse caso ele vai deixar o ultimo parâmetro como undefined

function defaultParams(a = 1, b = 2, c = 3) { // Aqui foi definido padrão para parâmetro C
    console.log(a, b, c)
}
defaultParams(7, 8, 9) // Como foi passado valor, ele usa o valor que foi passado
defaultParams(7, 8) // Nesse caso ele vai usar o valor padrão guardado em C
defaultParams(7)
defaultParams() // Aqui usara todos os valores que foram colocados em padrão

function logNums(nums) {
    for(let n of nums) {
        console.log(n)
    }
}
logNums([1, 2, 3, 4, 5, 6, 7, 8, 9])

// operador spread/rest
function logNums2(...nums) { // spread/rest usa os ... antes do nome da variável, assim quando ela for chamada não precisa definir ela como array
    console.log(nums) // ... significa que a função vai receber uma quantidade variável de parâmetros e todos eles são armazenados dentro da função
}
logNums2(1, 2, 3, 4, 5, 6) // a chamada da função não precisa de colchetes [] 

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

