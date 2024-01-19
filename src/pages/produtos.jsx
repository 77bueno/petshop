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

        <article>
          <h3>Banho</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit laborum aperiam eos dolor, temporibus maxime ad soluta hic perferendis alias consequuntur illo obcaecati ipsam ea illum laudantium laboriosam ab.</p>
        </article>

        <article>
          <h3>Castração</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit laborum aperiam eos dolor, temporibus maxime ad soluta hic perferendis alias consequuntur illo obcaecati ipsam ea illum laudantium laboriosam ab.</p>
        </article>

        <article>
          <h3>Tosa</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit laborum aperiam eos dolor, temporibus maxime ad soluta hic perferendis alias consequuntur illo obcaecati ipsam ea illum laudantium laboriosam ab.</p>
        </article>
      </StyledProdutos>
    </>
  )
}

const StyledProdutos = styled.section`
  h2::before{
    content: "🎁 ";
  }
`;