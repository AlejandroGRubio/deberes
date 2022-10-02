"use strict";


let msj = `juan:rubio:645234901:juan@gmail.com:03345`;

function separador(mensaje) {
    
    //Dividimos el mensaje para guardarlo
    let arrMensaje = mensaje.split(`:`);

    let cliente = {

        nombre: arrMensaje[0],
        apellidos: arrMensaje[1],
        telefono: arrMensaje[2],
        email: arrMensaje[3],
        codigopostal: arrMensaje[4],
        //Creamos la funcion imprimir, para sacar la información y guardamos el servidor.
        imprimir: function(){
            let servidor = cliente.email.split(`@`);
            console.log(`Información del cliente: ${cliente.nombre} ${cliente.apellidos}, Telefono: ${cliente.telefono}, Email: ${cliente.email}, Código postal: ${cliente.codigopostal}, Servidor: ${servidor[1]}.`);
        },




    }
    return cliente;

}

let cli = separador(msj);

cli.imprimir();