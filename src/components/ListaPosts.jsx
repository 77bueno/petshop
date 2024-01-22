export default function ListaPosts() {
    return <Styledlistaposts>
        
    { arrayPosts.map( (artigo) => {
      return (
      <article key={artigo.id}>
      <Link href="">
      <h3>{artigo.titulo}</h3>
      <p>{artigo.subtitulo}</p>
      </Link>
      </article>
      )
    })}
    
  </Styledlistaposts>
}

const Styledlistaposts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin: 0 0 1rem 0;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: black;

    &:hover, 
    &:focus {
      color: #0066ff;
    }
  }
}

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    article {
      width: 49%;
    }
  }
`;