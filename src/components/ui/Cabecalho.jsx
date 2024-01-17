import Menu from "./Menu";

export default function Layout( {children} ) {
    return <>
        <header>
            <h1>Petshop</h1>
            <Menu />
        </header>
        <main className="limitador">{children}</main>
    </>
}