import { MainCard } from "./components/MainCard";
import { Search } from "./components/Search";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <MainCard />
      <Search />
    </HomeContainer>
  )
}
