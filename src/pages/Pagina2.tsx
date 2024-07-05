import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from "next/link";
export const Pagina2 = ()=>{
    //primpero se escribe useStateSniped , borras la e y luego apreta ctrl + space y usestate solo , y lito
    const [nombre, setNombre] = useState("Joselito")
    const [apellido, setApellido] = useState("Vaca")
    const [eNombre,setENombre] = useState("")
    const validarNombre = (valor:string)=>{
        if(valor.length<4){
            setENombre("Deves ingresar 4 caracteres")
        }else{
            setENombre("")
        }
        setNombre(valor)
    }
    return (
        <>
                <nav>
                    <Link href={"/Pagina1"}>Pagina1</Link>
                    <Link href={"/Pagina2"}>Registrar</Link>
                    <Link href={"/Pagina3"}>Registrar_firevase</Link>
                </nav>
        <h1>Registro</h1>
        <h2>Bienvenido {nombre} {apellido}</h2>
        <Form >
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                    type='text' 
                    placeholder='Ingrese su nombre:'
                    //currentarge = tomen como objetivo al valor actual
                    onChange={(nombre_new)=>validarNombre(nombre_new.currentTarget.value)}
                    />
                    <Form.Text>
                        {eNombre}
                    </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control 
                    type='text'
                    placeholder='Ingrese su Apellido:'
                    onChange={(apellido_new)=>setApellido(apellido_new.currentTarget.value)}
                    />
            </Form.Group>
            <Button type='button' variant='success'>Registrar</Button>
        </Form>
        </>
    )
}
export default Pagina2