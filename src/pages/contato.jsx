import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contate-nos</title>
        <meta name="description" content="Contato do Petshop" />
      </Head>

      <StyledContato>
        <h2>Fale conosco</h2>

        <Container>
          <form action="" method="post">
            <div>
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" id="nome" />
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input type="text" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea 
                type="text" 
                name="mensagem" 
                id="mensagem" 
                cols="30" 
                rows="8" 
                maxLength={500}>
              </textarea>
            </div>

            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  )
}

const StyledContato = styled.section`
  h2::before{
    content: "💌 ";
  }
`;