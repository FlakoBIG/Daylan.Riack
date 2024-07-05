import React from 'react'
import Link from "next/link";
export const Pagina1 = () => {
  return (
    <>
        <nav>
          <Link href={"/Pagina1"}>Pagina1</Link>
          <Link href={"/Pagina2"}>Registrar</Link>
          <Link href={"/Pagina3"}>Registrar_firevase</Link>
          <Link href={"/Pagina4"}>datos</Link>
        </nav>
        <h1>Bienvenido</h1>
        <p>ola como tai , tai en la pagina1 manito</p>
    </>
  )
}
export default Pagina1
