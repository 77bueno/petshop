import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petshop</title>
        <meta name="description" content="Petshop" />
      </Head>

      <StyledHome>
        <h2>Pet Notícias</h2>
      </StyledHome>
    </>
  )
}

const StyledHome = styled.section`
  h2::before{
    content: "📰 ";
  }
`;