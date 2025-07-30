// Ejercicio 9: Conversor de notas musicales (switch)
let nota = 'LA';
let midi;

switch (nota) {
    case 'DO':
        midi = 60;
        break;
    case 'RE':
        midi = 62;
        break;
    case 'MI':
        midi = 64;
        break;
    case 'FA':
        midi = 65;
        break;
    case 'SOL':
        midi = 67;
        break;
    case 'LA':
        midi = 69;
        break;
    case 'SI':
        midi = 71;
        break;
    default:
        midi = "nota desconocida";
}

console.log(midi);
