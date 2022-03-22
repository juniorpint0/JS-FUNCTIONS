// Anonymous function
//IIFE - Immediately Invoker Function Expressions
(function (a, b ,c) {
    console.log (`Result: ${a + b + c}`)
})(1, 2, 3); // Função expressa, ele é anonima e para chamar se passa os dados logo em seguida

(function () {
    let x = 300
    console.log (x)
})(); //Quandio se tem mais de uma função imediata, precisa necessariamente usar ';'

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();