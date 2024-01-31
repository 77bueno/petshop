import styled from "styled-components";

export default function ListaCategorias(
    {categorias, filtrar, limparFiltro, filtroAtivo, categoriaAtiva}
) { 
    return (
        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return <button className={categoria === categoriaAtiva ? "ativo" : "" } 
            onClick={filtrar} key={indice}>{categoria}</button> 
          })}
          { filtroAtivo && <button onClick={limparFiltro} className="limpar">Limpar Filtro</button>}
        </StyledCategorias>
    )
}

const StyledCategorias = styled.div`
  display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    flex-wrap: wrap ;
  button {
    background-color: rgb(75, 163, 195);
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px;
    border-radius: 6px;
    text-transform: capitalize;

    &:hover {
      background-color: rgb(52, 141, 173);
      cursor: pointer;
    }

    &.ativo {
      background-color: darkblue;
    }
  }

  .limpar {
    background-color: rgb(250 116 144);

    &:hover {
      background-color: #ff1a1a;
    }

    &::before {
      content: "🧹 ";
    }
  }
`;