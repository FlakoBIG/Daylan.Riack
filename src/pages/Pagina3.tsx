import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import handler from './api/hello';
import { Persona } from '@/interfaces/interfaces';
import { initialStatePersona } from '@/interfaces/Estados_iniciales';
import { registrarPersona } from '@/Firebase/Promesas';
import Link from "next/link";

export const Pagina3 = () => {
    const [persona, setpersona] = useState<Persona>(initialStatePersona)
    const handlePerosna = (name:string,value:string)=>{
        setpersona({...persona,[name]:value})
    }
    const handleRegistrar = ()=>{
        registrarPersona(persona).then(()=>{
            alert("Se registra con exito")
        }).catch((e)=>{
            alert("algo pajo")
            console.log(e)
        })
    }
    return (
    <>
                <nav>
                    <Link href={"/Pagina1"}>Pagina1</Link>
                    <Link href={"/Pagina2"}>Registrar</Link>
                    <Link href={"/Pagina3"}>Registrar_firevase</Link>
                </nav>
        <Form>
            <h1>Registrar personas</h1>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                        type='text' 
                        placeholder='Ingrese su nombre:'
                        name="nombre"
                        onChange={(e)=>{handlePerosna(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control
                        type='text' 
                        placeholder='Ingrese su Apellido:'
                        name="apellido"
                        onChange={(e)=>{handlePerosna(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rut: </Form.Label>
                <Form.Control
                        type='text' 
                        placeholder='Ingrese su Rut:'
                        name="rut"
                        onChange={(e)=>{handlePerosna(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control
                        type='email' 
                        placeholder='Ingrese su Correo:'
                        name="correo"
                        onChange={(e)=>{handlePerosna(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha de nacimiento: </Form.Label>
                <Form.Control
                        type='date' 
                        placeholder='Ingrese su Fecha de nacimiento:'
                        name="fechaNacimiento"
                        onChange={(e)=>{handlePerosna(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad: </Form.Label>
                <Form.Control
                        type='number' 
                        placeholder='Ingrese su Edad:'
                        name="edad"
                        onChange={(e)=>{handlePerosna(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Button type='button' variant='primary' onClick={handleRegistrar}>Registrar</Button>
        </Form>
    </>
    )
}
export default Pagina3