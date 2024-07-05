import React, { useEffect } from 'react'
import Link from "next/link";
import { obtenerPersona } from '@/Firebase/Promesas';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
export const Pagina4 = () => {
    useEffect(()=>{
        obtenerPersona().then((personas)=>{
            console.log(personas)
        }).catch((e)=>{
            alert("no se logra cargar los daots")
            console.log(e)
        })
    },[])
    return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>RUT</th>
                    <th>Correo</th>
                    <th>Fecha nacimiento</th>
                    <th>Edad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    </>
    )
}
export default Pagina4