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

export const iniciarSesion = async (user, pass) => {

    signInWithEmailAndPassword(autentificar, user, pass)
    .then((credenciales) => {
    })
    .catch((error) =>{
        console.log(`Error en: ${error.message}`);
    });


};


export const verificarPermisosUsuario = async (db, nomBase) => {

   //console.log(autentificar.currentUser.uid);
   
   
    if (autentificar.currentUser.uid != null) {
    
    devolverDatosUsuarioYComprobarPermisos(db, nomBase, autentificar.currentUser.uid);




   }
   
   
    






}