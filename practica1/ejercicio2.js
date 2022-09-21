"use strict";

let partido1Juan;
let partido2Juan;
let partido3Juan;
let partido1Miguel;
let partido2Miguel;
let partido3Miguel;
let partido1Maria;
let partido2Maria;
let partido3Maria;

let mediaJuan;
let mediaMiguel;
let mediaMaria;

let mejorMedia;
let mejorPuntuacion;

partido1Juan=99;
partido2Juan=120;
partido3Juan=120;

partido1Miguel=116;
partido2Miguel=94;
partido3Miguel=123;

partido1Maria=97;
partido2Maria=134;
partido3Maria=105;


mediaJuan=0;
mediaMiguel=0;
mediaMaria=0;
mejorMedia="Juan";
mejorPuntuacion=0;

mediaJuan=(partido1Juan+partido2Juan+partido3Juan)/3;
mediaMiguel=(partido1Miguel+partido2Miguel+partido3Miguel)/3;
mediaMaria=(partido1Maria+partido2Maria+partido3Maria)/3;


if(mediaJuan == mediaMiguel && mediaJuan == mediaMaria && mediaMiguel == mediaMaria){
    mejorMedia="ninguno, ha sido empate";
    mejorPuntuacion=mediaJuan;
}
else if(mediaJuan > mediaMiguel && mediaJuan > mediaMaria){
    mejorMedia="Juan";
    mejorPuntuacion=mediaJuan;
}
else if(mediaMiguel > mediaJuan && mediaMiguel > mediaMaria){
    mejorMedia="Miguel";
    mejorPuntuacion=mediaMiguel;
}
else{
    mejorMedia="Maria";
    mejorPuntuacion=mediaMaria;
}


console.log(`El equipo con mejor media de puntuacion es ${mejorMedia} con ${mejorPuntuacion} puntos`);




