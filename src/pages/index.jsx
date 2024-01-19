import Head from "next/head";
import styled from "styled-components";
import Link from "next/link"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Petshop</title>
        <meta name="description" content="Petshop" />
      </Head>

      <StyledHome>
        <h2>Pet Notícias</h2>

        <Styledlistaposts>
          <article>
            <Link href="">
            <h3>Titulo...</h3>
            <p>Subtitulo...</p>
            </Link>
          </article>
          
          <article>
            <Link href="">
            <h3>Titulo...</h3>
            <p>Subtitulo...</p>
            </Link>
          </article>
        </Styledlistaposts>


      </StyledHome>
    </>
  )
}

const Styledlistaposts = styled.div`

`;

const StyledHome = styled.section`
  h2::before{
    content: "📰 ";
  }
`;