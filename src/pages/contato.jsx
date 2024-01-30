import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import { UseForm, useForm } from "react-hook-form"; 

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const enviarContato = () => {
    console.log("Enviando dados...");
  }

  return (
    <>
      <Head>
        <title>Contate-nos</title>
        <meta name="description" content="Contato do Petshop" />
      </Head>

      <StyledContato>
        <h2>Fale conosco</h2>

        <Container>
          <form action="" method="post" onSubmit={handleSubmit(dados => {
            enviarContato(dados)
          })}>
            <div>
              <label htmlFor="nome"><b>Nome:</b> </label>
              <input {...register("nome")} type="text" name="nome" id="nome" />
            </div>

            <div>
              <label htmlFor="email"><b>Email:</b> </label>
              <input {...register("email")} type="text" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="mensagem"><b>Mensagem:</b> </label>
              <textarea 
                {...register("mensagem")}
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
  h2::before {
    content: "💌 ";
  }

  form input, textarea {
    width: 70%;
    border: none;
    box-shadow: var(--sombra-box);
    padding: 0.5rem;
    margin: 0 0 1rem 0;
  }
  
  form label {
    font-weight: bold;
    width: 30%;
    display: flex;
    align-items: center;
  }

  form div {
    display: flex;
  }

  button {
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 12px;
    border-radius: 6px;
    border: none;
    font-weight: bold;
  }
`;