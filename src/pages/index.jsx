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
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin: 0 0 1rem 0;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: black;

    &:hover, 
    &:focus {
      color: #0066ff;
    }
  }
}

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    article {
      width: 49%;
    }
  }
`;

const StyledHome = styled.section`
  h2::before{
    content: "📰 ";
  }
`;