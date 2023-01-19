import { useContextSelector } from 'use-context-selector';

import { IssuesContext } from '../../../../context/IssuesContext';
import { timeout } from '../../../../utils/timeout';
import { SearchContainer } from './styles';

export function Search() {
  const size = useContextSelector(IssuesContext, ({ size }) => size)
  const search = useContextSelector(IssuesContext, ({ search }) => search)

  async function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchText = e.target.value

    await timeout(700)

    if (searchText.length > 2) {
      search(e.target.value)
    } else {
      search()
    }
  }

  return (
    <SearchContainer>
      <section>
        <h1>Publicações</h1>
        <p>{size + ' '} publicações</p>
      </section>

      <input type="text" placeholder="Buscar conteúdo" onChange={onSearch} />
    </SearchContainer>
  )
}
