"use strict";

function productoConImpuestos(nomProducto = `Producto genérico`, precio = 100, impuesto = 21){

    if (isNaN(precio)) {
        return `ERROR. El precio insertado no es un valor válido`;
    }
    else if (isNaN(impuesto)) {
        return `ERROR. El impuesto insertado no es un valor válido`;
    }
    else{

        return `El producto es ${nomProducto} con un precio final de ${precio + (precio * (impuesto/100))} de euros`;


    }
}

console.log(`${productoConImpuestos("escoba", 7, 21)}`);