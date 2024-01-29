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