import Head from "next/head";
import styled from "styled-components";
import Link from "next/link"; 
import ListaPosts from "@/components/ListaPosts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petshop</title>
        <meta name="description" content="Petshop" />
      </Head>

      <StyledHome>
        <h2>Pet Notícias</h2>

        <ListaPosts posts={ [{ id: 1, titulo: "teste", subtitulo:"teste2" }] } />

      </StyledHome>
    </>
  )
}

const StyledHome = styled.section`
  h2::before{
    content: "📰 ";
  }
`;