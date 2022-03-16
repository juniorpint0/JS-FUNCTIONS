// Function declaration

function sayHello() {
    console.log('Hello!')
}

sayHello()

function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo('Mike')

function returnHi() {
    return 'Hi!'
}

const greeting = returnHi() // Também pode ser usado let ou var
console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))