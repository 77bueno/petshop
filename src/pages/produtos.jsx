import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos</title>
        <meta name="description" content="Produtos do Petshop" />
      </Head>

      <StyledProdutos>
        <h2>Conheça nossos produtos</h2>

        <Container> 
          <article>
            <h3>Banho</h3>
            <p>O banho no seu pet é um ritual de carinho e cuidado que fortalece o vínculo entre vocês. Além de manter a higiene, é um momento onde o animal se sente mimado e amado. O toque suave da água, o aroma agradável do shampoo, e a sensação de pelagem limpa proporcionam uma experiência positiva para o seu companheiro peludo.</p>
          </article>

          <article>
            <h3>Tosa</h3>
            <p>A tosa em animais de estimação é mais do que uma simples questão estética; é um cuidado essencial para garantir o bem-estar e a saúde dos nossos companheiros peludos. Assim como nós, humanos, cuidamos do nosso cabelo, os animais de estimação também precisam de atenção especial para manter uma pelagem saudável e bonita..</p>
          </article>

          <article>
            <h3>Castração</h3>
            <p>Para as fêmeas, o tipo mais recomendado de cirurgia de castração de cachorro é a ovariectomia, que consiste na remoção cirúrgica tanto do útero quanto dos ovários. Já para os machos, o procedimento mais comum é chamado de orquiectomia, que consiste na remoção dos dois testículos. Tome cuidado com seu doguinho! </p>
          </article>
        </Container> 
      </StyledProdutos>
    </>
  )
}

const StyledProdutos = styled.section`
  h2::before{
    content: "🎁 ";
  }

  article {
    padding: 1rem;
  }

  @media screen and (min-width: 800px ) {
    /* Esta div é o StyledContainer, mas com uma formatação 
    que só vale pra essa página (página produtos) */
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;