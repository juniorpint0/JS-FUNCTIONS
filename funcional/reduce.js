const numbers = [ 1, 2, 3, 4, 5, 6 ];
const numbers2 = [ 5, 10, 15, 20, 25, 30 ];
const sum = (total, el) => total + el
// const total = numbers.reduce(sum) // Primeiro parâmetro é uma função que vai ser processado em cima de todos os elementos e eo segundo parâmetro é o valor inicial

// console.log(total)
console.log(numbers.length)
const n = numbers.length
const media = (lista) => { 
    const total = lista.reduce(sum, 0) / n
    // console.log(total)
    return total
}
// const total = numbers.reduce(media, 0) / n 
const m1 = media(numbers)
const m2 = media(numbers2)
console.log(m1, m2)

// console.log(total)
