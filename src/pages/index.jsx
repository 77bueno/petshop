import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";

export default function Home() {  
  const [listaDePosts, setListaDePosts] = useState([]);

  useEffect( () => {
    const carregarPosts = async () => {
        try {
            const resposta = await fetch(`http://10.20.46.27:2112/posts`);
            const dados = await resposta.json();
            setListaDePosts(dados);
        } catch (error) {
            console.error("Erro ao listar posts: "+error);
        }
    }
    carregarPosts();
}, [] );


  return (
    <>
      <Head>
        <title>Petshop</title>
        <meta name="description" content="Petshop" />
      </Head>

      <StyledHome>
        <h2>Pet Notícias</h2>

        <ListaPosts posts={ listaDePosts } />

      </StyledHome>
    </>
  )
}

const StyledHome = styled.section`
  h2::before{
    content: "📰 ";
  }
`;