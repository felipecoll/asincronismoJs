// Asincronismo

/*
¿En qué formas JS puede manejar la asincronía?

Callbacks:

Una función que se pasa como argumento de otra función y que será invocada 
según sea su necesidad.

Promesas (ES6):

Función no-bloqueante y asíncrona la cual puede retornar un valor ahora, 
en el futuro o nunca.

Async / Await (ES2017)

Permite estructurar una función asincrónica sin bloqueo de 

una manera similar a una función sincrónica ordinaria.

Estos 3 conceptos son con los que más se trabajan dentro del asincronismo.
*/

function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1,num2)
}

console.log(calc(2,2,sum))


// Uso de setTimeOut

setTimeout(function () {
    console.log('Hola js!!!')
}, 2000)


function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

setTimeout(saludar, 2000, 'Felipe')

// Ejercicio de calculadora 
// function sum(num1, num2) {
//     return num1 + num2;
// }

// function rest(num1, num2) {
//     return num1 - num2;
// }

// function mult(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num1 / num2;
// }

// function calc(num1, num2, callback) {
//     return callback(num1, num2);
// };


