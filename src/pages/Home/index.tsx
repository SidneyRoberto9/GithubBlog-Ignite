import { useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';

import { IssuesContext } from '../../context/IssuesContext';
import { Card } from './components/Card';
import { MainCard } from './components/MainCard';
import { Search } from './components/Search';
import { CardListContainer, HomeContainer } from './styles';

export function Home() {
  const Issues = useContextSelector(IssuesContext, ({ Issues }) => Issues)

  return (
    <HomeContainer>
      <MainCard />
      <Search />

      <CardListContainer>
        {Issues.map((issue) => (
          <Card
            key={issue.id}
            id={issue.id}
            title={issue.title}
            content={issue.body}
            createdAt={issue.created_at}
          />
        ))}
      </CardListContainer>
    </HomeContainer>
  )
}
