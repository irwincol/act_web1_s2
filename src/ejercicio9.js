// Ejercicio 9: Conversor de notas musicales (usando if/else)
let nota = 'LA';
let midi;

nota = nota.toUpperCase(); // convierte las entradas de las notas ingresads en minusculas a mayusculas para poder conpararlas.

if (nota === 'DO') {
    midi = 60;
} else if (nota === 'RE') {
    midi = 62;
} else if (nota === 'MI') {
    midi = 64;
} else if (nota === 'FA') {
    midi = 65;
} else if (nota === 'SOL') {
    midi = 67;
} else if (nota === 'LA') {
    midi = 69;
} else if (nota === 'SI') {
    midi = 71;
} else {
    midi = "nota desconocida";
}

console.log(midi);
