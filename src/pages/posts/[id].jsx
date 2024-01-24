import  Head  from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import serverApi from "../api/server";

export async function getStaticProps( {params} ){
    const { id } = params;
    console.log(id);

    try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        
        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`)
          }

        const dados = await resposta.json();
        return {
            props: {
                post: dados
            }
        }
    } catch (error) {
        console.error("Erro ruim: "+error.message);
    }
}

export async function getStaticPaths(){
    return {
        paths: [],
        fallback: "blocking"
    }
}

export default function Post({post}){
  const tituloPagina = `${post.titulo} - Petshop`;
  return (
    <>
      <Head>
       <title> {tituloPagina} </title>
       <meta name="description" content={post.descricao} />
      </Head>

      <StyledPost>
        <h2>{post.titulo}</h2>
        <Container>
            <h3>{post.categoria}</h3>
            <p>{post.descricao}</p>
        </Container>
      </StyledPost>
   </>
  );
}

const StyledPost = styled.article`
     h2::before {
        content: "📑 ";
     }
`;