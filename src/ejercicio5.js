// Ejercicio 5: Día laborable o fin de semana
let dia = 'sabado';
dia = dia.toLowerCase();

switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log("el dia es laborable");
        break;
    case 'sabado':
    case 'domingo':
        console.log("fin de semana");
        break;
    default:
        console.log("el ingresado día no es válido");
}
