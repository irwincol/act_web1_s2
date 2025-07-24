// Ejercicio 4: Calculadora básica con switch
let a = 10;
let b = 3;
let operador = '*'; // puede ser + - * /

switch (operador) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log('Operador no válido');
}
