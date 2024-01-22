import Head from "next/head";
import styled from "styled-components";
import Link from "next/link"; 
import arrayPosts from "./api/array-posts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petshop</title>
        <meta name="description" content="Petshop" />
      </Head>

      <StyledHome>
        <h2>Pet Notícias</h2>

        <ListasPosts> qualquerCoisa={arrayPosts} </ListasPosts>

      </StyledHome>
    </>
  )
}



const StyledHome = styled.section`
  h2::before{
    content: "📰 ";
  }
`;