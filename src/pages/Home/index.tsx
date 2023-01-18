import { Card } from "./components/Card";
import { MainCard } from "./components/MainCard";
import { Search } from "./components/Search";
import { CardListContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <MainCard />
      <Search />

      <CardListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardListContainer>
    </HomeContainer>
  )
}
