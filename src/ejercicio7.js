// Ejercicio 7: Descuento por volumen
let precioUnitario = 1000;
let cantidad = 11;
let precioSinDescuento = precioUnitario * cantidad;
let descuento = 0;
let precioFinal;

if (cantidad < 10) {
    descuento = 0;
} else if (cantidad >= 10 && cantidad < 50) {
    descuento = precioSinDescuento * 0.1;
} else if (cantidad >= 50) {
    descuento = precioSinDescuento * 0.2;
}

precioFinal = precioSinDescuento - descuento;
console.log(precioFinal.toFixed(2)); //  METODO toFixd(2) Imprime el precio final con dos decimales
