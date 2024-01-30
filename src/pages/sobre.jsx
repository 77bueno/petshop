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
          <p>O PetShop PetAmigo tem como missão oferecer aos nossos clientes e seus queridos pets uma experiência única e completa, proporcionando produtos e serviços de alta qualidade que promovam o bem-estar, saúde e felicidade dos animais de estimação. Buscamos ser mais do que um estabelecimento comercial; aspiramos a ser um verdadeiro parceiro na jornada de cuidado e amor pelos animais, promovendo uma convivência saudável e afetuosa entre tutores e seus companheiros de quatro patas.</p>

          <h3>Visão</h3>
          <p>Nossa visão é ser reconhecido como o PetShop referência em excelência e inovação, estabelecendo padrões elevados no atendimento ao cliente, na diversidade de produtos de qualidade e na prestação de serviços especializados. Almejamos ser um ponto de encontro para entusiastas de animais de estimação, criando uma comunidade que compartilha valores de respeito, responsabilidade e amor pelos animais.</p>

          <h3>Valores</h3>
          <ol>
            <li><b>Amor pelos Animais</b>: Colocamos o bem-estar e felicidade dos pets no centro de nossas ações, tratando cada animal como se fosse parte da nossa própria família.</li>
            <li><b>Compromisso com a Qualidade</b>: Buscamos constantemente a excelência em nossos produtos e serviços, selecionando cuidadosamente fornecedores e parceiros comprometidos com os mais altos padrões de qualidade.</li>
            <li><b>Ética e Transparência</b>: Pautamos nossas ações pela ética, transparência e integridade, mantendo relações honestas com clientes, colaboradores e parceiros.</li>
            <li><b>Inovação e Sustentabilidade</b>: Buscamos continuamente inovar, incorporando práticas sustentáveis em nossos processos e produtos, contribuindo para um mundo mais verde e responsável.</li>
            <li><b>Atendimento Personalizado</b>: Valorizamos a relação próxima com nossos clientes, oferecendo um atendimento personalizado que atenda às necessidades específicas de cada pet e de seus tutores.</li>
          </ol>
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