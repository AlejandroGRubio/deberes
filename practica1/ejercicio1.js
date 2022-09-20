"use strict";

let masaMarcos;
let masaJuan;
let alturaMarcos;
let alturaJuan;
let imcMarcos;
let imcJuan;
let imcMarcosMayorJuan;

masaMarcos=90;
masaJuan=67;

alturaMarcos=189;
alturaJuan=170;

imcMarcos=masaMarcos/(alturaMarcos*alturaMarcos);
imcJuan=masaJuan/(alturaJuan*alturaJuan);

imcMarcosMayorJuan=true;

console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${imcMarcos>imcJuan ? true:false}`);


