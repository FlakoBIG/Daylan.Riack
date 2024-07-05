import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Calculadora = () => {
    const [Primer_numero, setfirst_number] = useState(1)
    const [Segundo_numero, setsecond_number] = useState(2)
    const [Mensaje_1, setmensaje_1] = useState("")
    const [Mensaje_2, setmensaje_2] = useState("")
    const [valor_final, setvalor_final] = useState()
    const validar_numero_1= (valor_1:number)=>{
        setfirst_number(valor_1)
    }
    const validar_numero_2= (valor_2:number)=>{
        setsecond_number(valor_2)
    }
    const Calcular=(valor_1:number,valor_2:number,valor_final:number)=>{
        valor_final=(valor_1+valor_2)
        setvalor_final(valor_final)
    }
    return (
        <>
        <h1>Calculadora</h1>
        <h2>Ejemplo {Primer_numero}+{Segundo_numero}</h2>
        <Form>
            <Form.Group>
                <Form.Label>Primernumero: </Form.Label>
                <Form.Control
                    type='number' 
                    placeholder='Primero numero:'
                    //currentarge = tomen como objetivo al valor actual
                    onChange={(Nuevo_primero)=>validar_numero_1(Nuevo_primero.currentTarget.value)}
                    />
                    <Form.Text>
                        {Mensaje_1}
                    </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Segundo numero: </Form.Label>
                <Form.Control 
                    type='number'
                    placeholder='Segundo numero:'
                    onChange={(Nuevo_Segundo)=>validar_numero_2(Nuevo_Segundo.currentTarget.value)}
                    />
                    <Form.Text>
                        {Mensaje_2}
                    </Form.Text>
            </Form.Group>
            <Button type='button' variant='success' onClick={Calcular(Primer_numero,Segundo_numero)}>Calcular</Button>
            <Form.Text>
                {valor_final}
            </Form.Text>
        </Form>
        </>
    )
}
export default Calculadora
