import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Página sobre o Petshop</title>
        <meta name="description" content="Sobre o Petshop" />
      </Head>

      <StyledSobre>
        <h2>Sobre nosso Petshop</h2>

        <Container>
          <h3>Missão</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta autem fugit, delectus sapiente dolor placeat soluta! Reiciendis incidunt illo delectus culpa quaerat repudiandae est, quisquam ut molestiae debitis. Quia!</p>

          <h3>Visão</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nisi accusantium eos dolor corporis error dolorum, repellendus itaque distinctio ipsam illum quas quis repudiandae doloribus mollitia reprehenderit repellat velit. Mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur blanditiis pariatur officia quod qui minima deleniti, expedita sapiente laborum repellat vitae ullam labore maxime veritatis, beatae eligendi possimus rerum.</p>

          <h3>Valores</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio voluptas, reiciendis voluptate ipsum perferendis? </p>
        </Container>
      </StyledSobre>
    </>
  )
}

const StyledSobre = styled.section`
  h2::before{
    content: "💡 ";
  }
`;