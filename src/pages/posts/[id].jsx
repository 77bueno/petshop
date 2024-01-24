import  Head  from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import serverApi from "../api/server";

export async function getStaticProps( {params} ){
    /* Utilizamos a prop params do getStaticProps
    para poder ter acesso aos parâmetros dinâmicos da rota
    configurada nos links da Lista de Posts. Usamos a 
    desestruturação parar obter de forma direta o parâmetro
    chamado "id". */
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
        return {
            notFound: true
        }
    }
}

/* getStaticPaths é obrigatória quando se trata
de trabalhar com páginas/rotas dinâmicas, ou seja, que
dependem de parâmetros para serem construídas. */
export async function getStaticPaths(){
    return {
        /* paths fica vazio pois todos os caminhos devem ser
        gerados sob demanda, ou seja, no momento em que a 
        página for aberta. */
        paths: [],
        
        /* paths fica vazio pois todos os caminhos devem ser
        gerados sob demanda, ou seja, no momento em que a 
        página for aberta. */
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