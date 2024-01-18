import Link from "next/link"; 
import styled from "styled-components";
import { usePathname } from 'next/navigation';


export default function Menu() {
    const pathname = usePathname();
    
    return <>
            <StyledNav>
                <Link href="/" className={ pathname === '/' ? "ativo" : ""}>Blog</Link>
                <Link href="/produtos" className={ pathname === '/produtos' ? "ativo" : ""}>Produtos</Link>
                <Link href="/sobre" className={ pathname === '/sobre' ? "ativo" : ""}>Sobre</Link>
                <Link href="/contato" className={ pathname === '/contato' ? "ativo" : ""}>Contato</Link>
            </StyledNav>
    </>
}
const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

   

    a {
        text-decoration: none;
        background-color: var(--cor-primaria-fundo);
        color: var(--cor-primaria);
        padding: 0.8rem 1rem;

        &:first-child {
            border-top-left-radius: var(--borda-arredondada);
            border-bottom-left-radius: var(--borda-arredondada);
        }

        &:last-child {
            border-top-right-radius: var(--borda-arredondada);
            border-bottom-right-radius: var(--borda-arredondada);
        }

        &:hover, &:focus {
            background-color: var(--cor-primaria-fundo-hover);
        }

        @media screen and (min-width: 700px) {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

    a.ativo {
        background-color: #181772;
        color: white;
    }
`;