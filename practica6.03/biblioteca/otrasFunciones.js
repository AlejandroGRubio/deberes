export function generarId() {
    return Math.random().toString(30).substring(2);
} 

export function formatearFecha(fechaSin) {

    return `${fechaSin.toDate().getDate()}/${fechaSin.toDate().getMonth()+1}/${fechaSin.toDate().getFullYear()}`;


}