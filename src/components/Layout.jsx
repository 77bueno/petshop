import Link from "next/link"; 

export default function Layout( {children} ) {
    return <>
        <header>
            <h1>Petshop</h1>
            <nav>
                <Link href="/">Blog</Link>
                <Link href="/produtos">Produtos</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato">Contato</Link>
            </nav>
        </header>
        <main>{children}</main>
    </>
}