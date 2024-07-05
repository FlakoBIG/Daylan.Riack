import { Perfil } from "@/Componentes/Perfil";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav>
      <Link href={"/Pagina1"}>Pagina1</Link>
      <Link href={"/Pagina2"}>Registrar</Link>
      <Link href={"/Pagina3"}>Registrar_firevase</Link>
      <Link href={"/Pagina4"}>datos</Link>
    </nav>
      <Perfil Nombre="Luis" Apellido="Maicol" Edad={6}/>
      <Perfil Nombre="Daylan" Apellido="Collado" Edad={20}/>
      <Perfil Nombre="Benjamin"Apellido="Rios" Edad={21}/>
      
    </>
  );
}
