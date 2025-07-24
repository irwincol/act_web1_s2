// Ejercicio 5: Día laborable o fin de semana
let dia = 'sabado';

dia = dia.toLowerCase();

if (dia === 'lunes' || dia === 'martes' || dia === 'miercoles' || dia === 'jueves' || dia === 'viernes') {
    console.log("laborable");
} else if (dia === 'sabado' || dia === 'domingo') {
    console.log("fin de semana");
} else {
    console.log("el ingresado día no es válido");
}
