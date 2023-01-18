import { SearchContainer } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <section>
        <h1>Publicações</h1>
        <p>6 publicações</p>
      </section>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
