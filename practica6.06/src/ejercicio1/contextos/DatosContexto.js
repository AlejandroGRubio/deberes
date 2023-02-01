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

    
    const [vehiculos, setVehiculos] = useState(valoresIniciales);
    
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
    
            let datosPer = devolverDatosOtro(url);

    
            array = [...array, datosPer];
    
            contar++;
        }

        let datosResuelto = await Promise.allSettled(array);
    
        setPersonajes(datosResuelto);

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
    
            let datos = devolverDatosOtro(url);
    
            array = [...array, datos];
    
            contar++;
        }
        let datosResuelto = await Promise.allSettled(array);
    
       setNaves(datosResuelto);
    
    }

    const getDatosVehi = async (arrayV) => {

    
        let contar = 0;
    
        let array = [];
    
        while (contar < arrayV.length) {
            
            var url = arrayV[contar];
    
            let datos = devolverDatosOtro(url);
    
            array = [...array, datos];
    
            contar++;
        }
        let datosResuelto = await Promise.allSettled(array);
        
    
       setVehiculos(datosResuelto);
    
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

    const cosas = { getPeliculaDatos, peliculas, pelicula, personajes, naves, vehiculos, getDatosNaves, getDatosVehi, setVehiculos, setNaves,
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
