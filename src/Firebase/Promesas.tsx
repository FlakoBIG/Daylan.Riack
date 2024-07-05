import { Persona } from "@/interfaces/interfaces";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db, "persona"),persona);
    }
export const obtenerPersona = async()=>{
        const querySnapshot = await getDocs(collection(db, "persona"));
        let personas:Persona[] = []
    querySnapshot.forEach((doc) => {
        let persona:Persona = {
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            edad:doc.data().edad,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre,
            rut:doc.data().rut
        }
        personas.push(persona)
    });
    return personas
}