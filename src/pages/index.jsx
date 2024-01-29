import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverApi from "./api/server";

  export async function getStaticProps(){
    console.log("Código de servidor (não aparece no cliente)...");

    try {
      const resposta = await fetch(`${serverApi}/posts`);
      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`)
      }

      const categorias = dados.map( post => post.categoria  )
      const categoriasUnicas = [...new Set(categorias)];

      return { 
        props: {
          posts: dados,
          categorias: categoriasUnicas
        },
      }
    } catch (error) {
      console.error("Deu ruim: "+error.message);
      return {
        notFound: true
      }
    }
  }

export default function Home({posts, categorias}) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");
 
  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;
    const novaListaDePosts = posts.filter( post => post.categoria === categoriaEscolhida );
    setFiltroAtivo(true);
    setListaDePosts(novaListaDePosts);

    // Sinalizando o State com o texto/categoria escolhida
    setCategoriaAtiva(categoriaEscolhida);
  }
  
  const limparFiltro = () => {
    setFiltroAtivo(false);
    setListaDePosts(posts);
    
    // Atualizando o State da categoria ativa para vazio ""
    setCategoriaAtiva("");
  }

  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="PetShop, Banho, Ração, Gato, Cachorro" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return <button className={categoria === categoriaAtiva ? "ativo" : "" } 
            onClick={filtrar} key={indice}>{categoria}</button> 
          })}
          { filtroAtivo && <button onClick={limparFiltro} className="limpar">Limpar Filtro</button>}
        </StyledCategorias>

        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledCategorias = styled.div`
  display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    flex-wrap: wrap ;
  button {
    background-color: #181772;
    color: white;
    text-shadow: black 1px 1px 1px;
    font-weight: bold;
    border: none;
    padding: 15px;
    border-radius: 6px;
    text-transform: capitalize;

    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
  }

  .limpar {
    background-color: gray;

    &:hover {
      background-color: slategray;
    }

    &::before {
      content: "🧹 ";
    }
  }
`;

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;