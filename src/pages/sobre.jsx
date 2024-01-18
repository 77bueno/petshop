import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Página sobre o Petshop</title>
        <meta name="description" content="Sobre o Petshop" />
      </Head>

      <StyledSobre>
        <h2>Sobre nosso Petshop</h2>
      </StyledSobre>
    </>
  )
}

const StyledSobre = styled.section`
  h2::before{
    content: "💡 ";
  }
`;