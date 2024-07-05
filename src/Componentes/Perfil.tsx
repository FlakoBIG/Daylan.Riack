import React from 'react'
import { Permiso } from './Permiso'

interface Props{
    Nombre:string,
    Apellido:string,
    Edad?:number
}
export const Perfil = (props:Props) => {
    return (
        <div>
            <h1>HOLa u loko</h1>
            <p>Nombre : {props.Nombre}</p>
            <p>Apellido : {props.Apellido}</p>
            <p>Edad : {props.Edad}</p>
            {
                props.Edad!=undefined &&
                props.Edad >= 18 &&
                
                <>
                <p>Tienes permitido pasar</p>
                <Permiso permiso1='beber' permiso2='conducir'/>
                </>
            }
            {
                props.Edad!=undefined &&
                props.Edad < 18 &&
                
                <>
                <p>NOOOO Tienes permitido pasar</p>
                <Permiso permiso1='Tomar leche' permiso2='Divertirse'/>
                </>
            }
        </div>
    )
}
