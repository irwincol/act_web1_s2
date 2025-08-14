// Ejercicio 8: Transporte con tarifa reducida
let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let descuento = 0;
let precioFinal;

if (edad < 18) {
    descuento = tarifaBase * 0.2;
} else if (edad >= 65) {
    descuento = tarifaBase * 0.4;
}

precioFinal = tarifaBase - descuento;
console.log(precioFinal.toFixed(2)); 
