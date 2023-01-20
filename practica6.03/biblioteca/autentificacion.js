"use strict";

import { app, autentificar } from "./conexion.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    onSnapshot,
    doc,
    query,
    where,
    orderBy,
    limit,
    updateDoc,
    deleteDoc,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { devolverDatosUsuarioYComprobarPermisos } from "./sacarDatos.js";
import { ocultarDatosDeInicioSesion } from "./mostrarDatos.js";


export const crearUsuario = async (user, pass, nombreUsuario, db, nomBase) =>{

    const usuarios = collection(db, nomBase);

    try {
        const credenciales = await createUserWithEmailAndPassword(
            autentificar,
            user,
            pass
        );
        
        const usuarioDoc = doc(usuarios, credenciales.user.uid);

        await setDoc(usuarioDoc, {
            nombre: nombreUsuario,
            rol: "usuario",
        });

    } catch (error) {
        console.log(`Error en: ${error.message}`);
    }

};

export const iniciarSesion = async (user, pass, db) => {

    var docu = window.document;


    signInWithEmailAndPassword(autentificar, user, pass)
    .then((credenciales) => {
        docu.getElementById(`errorInicioSesion`).innerText = ``;
        verificarPermisosUsuario(db, `usuarios`);
        indicarNombreUsuario(db, 'usuarios');
        
    })
    .catch((error) =>{
        docu.getElementById(`errorInicioSesion`).innerText = `Error: Correo o Contraseña incorrectos.`
        console.log(`Error en: ${error.message}`);
    });


};


export const verificarPermisosUsuario = async (db, nomBase) => {
   
    if (autentificar.currentUser) {
    
    ocultarDatosDeInicioSesion();
    devolverDatosUsuarioYComprobarPermisos(db, nomBase, autentificar.currentUser.uid);

   }
   
}

export const cerrarSesion = () => {

    try {
        autentificar.signOut();
    }catch(error){
        console.log(error.message);
    }



}


export const indicarNombreUsuario = async (db, nomBase) => {

    var docu = window.document;

    const usuarios = collection(db, nomBase);

    const usuarioDoc = doc(usuarios, autentificar.currentUser.uid);

    const usuariosDocumentos = await getDoc(usuarioDoc);

    var nombreUsuario = usuariosDocumentos.data().nombre;

    docu.getElementById("idUsuarioSesion").innerText = `Sesión iniciada con: ${nombreUsuario}`;


    docu.getElementsByClassName("ocultoInicioSesion")[0].className = `inicioSesion`;


}