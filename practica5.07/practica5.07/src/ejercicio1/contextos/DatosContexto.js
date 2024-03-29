"use strict";
import React, { useState, createContext, useEffect } from "react";

//Se crea el contexto.
const datosContexto = createContext();


const DatosContexto = (props) => {


    const url = "https://swapi.py4e.com/api/films";

    const valoresIniciales = [];
    const peliInicial = {};

    let datosVehi = [];
    let datosNave = [];

    
    
    const [peliculas, setPeliculas] = useState(valoresIniciales);
    const [pelicula, setPelicula] = useState(peliInicial);
    const [personajes, setPersonajes] = useState(valoresIniciales);

    const [clases, setClaseDatos] = useState(`noClicked`);

    const [clasesVehiculo, setClaseDatosVehiculo] = useState(`noClickedVehiculos`);
    const [vehiculo, setVehiculos] = useState(valoresIniciales);

    const [clasesNaves, setClaseDatosNaves] = useState(`noClickedNaves`);
    const [naves, setNaves] = useState(valoresIniciales);
    
    //Sacamos y guardamos las películas.
    const getPeliculas = async (url) => {
    
        let datos = await devolverDatos(url);
    
        if (!datos.message) {
            setPeliculas(datos);
        }
    
    
    }
    
    
    
    
    useEffect(()=>{
      //Guardamos los datos en su useState correspondiente.
        getPeliculas(url);
    
    
    },[]);
    
    
    
    //Sacamos y guardamos los datos de las películas.
    const getPeliculaDatos = async (url, funcSet) => {
    
        let datos = await devolverDatosOtro(url);
    
        if (!datos.message) {
            funcSet(datos);
        }
    
    
    }
    
    //Sacamos los datos de cada personaje.
    const getDatosPersonajes = async ( arrayPer, funcSet) => {
    
        let contar = 0;
    
        let array = [];
    
    
        while (contar < 10 ) {
    
            var url = arrayPer[contar];
    
            let datosPer = await devolverDatosOtro(url);
    
            array = [...array, datosPer];
    
            contar++;
        }
    
        funcSet(array);
    
    }
    
    //Sacamos los datos de las naves o de los vehículos.
    const getDatosNavesVehi = async (arrayD, funcSet) => {
    
        let contar = 0;
    
        let array = [];
    
        while (contar < arrayD.length) {
            
            var url = arrayD[contar];
    
            let datos = await devolverDatosOtro(url);
    
            array = [...array, datos];
    
            contar++;
        }
        
    
       funcSet(array);
    
    }
    
    //Sacamos los datos de la URL.
    function devolverDatos(url) {
        
        return(fetch(url)
         .then((respuesta) => {
             return respuesta.json();
         })
         .then((datos) => {
             return datos.results;
             
         })
         .catch(() => {
            return new Error("Fallo en la carga");
         })
         );
     
     
    };
    
    //Sacamos los datos de la URL de otra forma.
    function devolverDatosOtro(url) {
        
        return(fetch(url)
         .then((respuesta) => {
             return respuesta.json();
         })
         .then((datos) => {
             return datos;
             
         })
         .catch(() => {
            return new Error("Fallo en la carga");
         })
         );
     
     
    };

    const cosas = { datosVehi, datosNave, peliculas, setPeliculas, pelicula, setPelicula, personajes, setPersonajes, clases, setClaseDatos, clasesVehiculo, setClaseDatosVehiculo,
        vehiculo, setVehiculos, clasesNaves, setClaseDatosNaves, naves, setNaves, getPeliculas, getPeliculaDatos, getDatosPersonajes, getDatosNavesVehi,
    devolverDatos, devolverDatosOtro };

    return (
        // Se crea el proveedor del contexto a través del children.
        <datosContexto.Provider value={cosas}>
          {props.children}
        </datosContexto.Provider>
      );


};

export default DatosContexto;
// Hay que exportar el contexto para que pueda ser utilizado.
export { datosContexto };
