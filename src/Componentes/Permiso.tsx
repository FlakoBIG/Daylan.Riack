import React from 'react'


interface Props{
    permiso1:string,
    permiso2:string
}
export const Permiso = (Props:Props) => {
    return (
    <>
        <ul>
            <li>Permiso1: {Props.permiso1}</li>
            <li>Permiso2: {Props.permiso2}</li>
        </ul>
    </>
    )
}
"escrive rac para hacer el auto completao"