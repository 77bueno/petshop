import Menu from "./Menu";
import Link from "next/link"; 
import Image from "next/image"; 

export default function Layout( {children} ) {
    return <>
        <header>
            <h1>
                <Image src='/images/logo.png' width={48} height={48}
                alt='Patinha dentro de um coração' />

                <Link href='/'>Petshop</Link>
            </h1>
            <Menu />
        </header>
    </>
}