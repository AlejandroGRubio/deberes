"use strict";


import * as Tags from "./biblioteca/TagsCosas.js";







console.log(`El número de parrafos de la página son ${Tags.numTag(`p`)}`);
console.log(Tags.contenidoTag(`p`, 2));
console.log(`El número de enlaces de la página son ${Tags.numTag(`a`)}`);
console.log(`El primer enlace es: ${Tags.contenidoAttr(`a`,`href`,1)}`);