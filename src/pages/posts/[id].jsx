import  Head  from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";

export default function Post(){
  return (
    <>
      <Head>
       <title>Título do post... - Petshop</title>
       <meta name="description" content="Descricao do post" />
      </Head>

      <StyledPost>
        <h2>Titulo do Post...</h2>
        <Container>
            <h3>Categoria do Post...</h3>
            <p>Descrição do Post</p>
        </Container>
      </StyledPost>
   </>
  );
}

const StyledPost = styled.article`
     
`;