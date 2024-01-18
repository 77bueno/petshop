import Link from "next/link"; 
import styled from "styled-components";

export default function Menu() {
    return <>
            <StyledNav>
                <Link href="/">Blog</Link>
                <Link href="/produtos">Produtos</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato">Contato</Link>
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
    }
`;