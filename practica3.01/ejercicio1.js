"use strict";

//Se importa el archivo de la biblioteca.
import * as Tags from "./biblioteca/TagsCosas.js";






//Aquí están los datos por consola. 
console.log(`El número de parrafos de la página son ${Tags.numTag(`p`)}`);
console.log(`El texto es: ${Tags.contenidoTag(`p`, 2)}`);
console.log(`El número de enlaces de la página son ${Tags.numTag(`a`)}`);
console.log(`El primer enlace es: ${Tags.contenidoAttr(`a`,`href`,1)}`);
console.log(`El penúltimo enlace es: ${Tags.contenidoAttr(`a`,`href`,30)}`);

//Con anyadirById introducimos el Id y lo que queramos introducir, con etiquetas HTML para formatearlo debidamente.
Tags.anyadirById(`info`, `<p>El número de parrafos de la página son ${Tags.numTag(`p`)}</p>`)

Tags.anyadirById(`info`, `<p>El texto es: ${Tags.contenidoTag(`p`, 2)}</p>`);

Tags.anyadirById(`info`, `<p>El número de enlaces de la página son ${Tags.numTag(`a`)}</p>`);

Tags.anyadirById(`info`, `<p>El primer enlace es: ${Tags.contenidoAttr(`a`,`href`,1)}`);

Tags.anyadirById(`info`, `<p>El penúltimo enlace es: ${Tags.contenidoAttr(`a`,`href`,30)}`);
