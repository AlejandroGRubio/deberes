"use strict";
import React, { useState, createContext, useEffect } from "react";

//Se crea el contexto.
const datosContexto = createContext();


const DatosContexto = (props) => {


    const url = "https://swapi.py4e.com/api/films";

    const valoresIniciales = [];
    const peliInicial = {};

    
    
    const [peliculas, setPeliculas] = useState(valoresIniciales);
    const [pelicula, setPelicula] = useState(peliInicial);
    const [personajes, setPersonajes] = useState(valoresIniciales);


    const [personaje, setPersonaje] = useState(peliInicial);
    const [nave, setNave] = useState(peliInicial);
    const [vehiculo, setVehiculo] = useState(peliInicial);

    const [clases, setClaseDatos] = useState(`noClicked`);

    const [clasesVehiculo, setClaseDatosVehiculo] = useState(`noClickedVehiculos`);
    const [vehiculos, setVehiculos] = useState(valoresIniciales);

    const [clasesNaves, setClaseDatosNaves] = useState(`noClickedNaves`);
    const [naves, setNaves] = useState(valoresIniciales);


    let arrNaves = [];

    let arrVehi = [];
    
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
    const getPeliculaDatos = async (url) => {
    
        let datos = await devolverDatosOtro(url);
    
        if (!datos.message) {
            setPelicula(datos);

            getDatosPersonajes(datos.characters);


        }
    
    
    }
    
    //Sacamos los datos de cada personaje.
    const getDatosPersonajes = async ( arrayPer) => {
    
        let contar = 0;
    
        let array = [];
    
    
        while (contar < 10 ) {
    
            var url = arrayPer[contar];
    
            let datosPer = await devolverDatosOtro(url);

    
            array = [...array, datosPer];
    
            contar++;
        }
    
        setPersonajes(array);

    }


    const getDatosPersonaje = async (url) => {

        let datos = await devolverDatosOtro(url);

        if (!datos.message) {
            setPersonaje(datos);

            getDatosNaves(datos.starships);

            getDatosVehi(datos.vehicles);
        }



    }

    const getDatosNave = async (url) => {

        let datos = await devolverDatosOtro(url);

        if (!datos.message) {
            setNave(datos);

        }



    }

    const getDatosVehiculo = async (url) => {

        let datos = await devolverDatosOtro(url);

        if (!datos.message) {
            setVehiculo(datos);

        }



    }


    
    //Sacamos los datos de las naves o de los vehículos.
    const getDatosNaves = async (arrayN) => {
    
        let contar = 0;
    
        let array = [];
    
        while (contar < arrayN.length) {
            
            var url = arrayN[contar];
    
            let datos = await devolverDatosOtro(url);
    
            array = [...array, datos];
    
            contar++;
        }
        
    
       setNaves(array);
    
    }

    const getDatosVehi = async (arrayV) => {

    
        let contar = 0;
    
        let array = [];
    
        while (contar < arrayV.length) {
            
            var url = arrayV[contar];
    
            let datos = await devolverDatosOtro(url);
    
            array = [...array, datos];
    
            contar++;
        }
        
    
       setVehiculos(array);
    
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

    const cosas = { getPeliculaDatos, peliculas, pelicula, personajes, naves, vehiculos, clases, clasesNaves, clasesVehiculo,
     setClaseDatosVehiculo, setClaseDatos, setClaseDatosNaves, getDatosNaves, getDatosVehi, setVehiculos, setNaves,
    personaje, getDatosPersonaje, getDatosNave, nave, vehiculo, getDatosVehiculo};

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
