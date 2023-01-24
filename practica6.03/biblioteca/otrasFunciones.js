
//Genera un id aleatorio.
export function generarId() {
    return Math.random().toString(30).substring(2);
} 
//Formatea la fecha de la lista.
export function formatearFecha(fechaSin) {

    return `${fechaSin.toDate().getDate()}/${fechaSin.toDate().getMonth()+1}/${fechaSin.toDate().getFullYear()}`;


}