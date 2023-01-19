import { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';

import { Issue, Issues } from '../@types/github';
import { issuesApi } from '../lib/axios';

interface IssuesContextType {
  Issues: Issue[]
  size: number
  search: (query?: string) => void
  getIssueById: (id: number) => Issue | undefined
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [Issues, setIssues] = useState<Issue[]>([])
  const [filter, setFilter] = useState<Issue[]>([])
  const [size, setSize] = useState<number>(0)

  async function getIssues(query?: string) {
    const repoName = 'repo:SidneyRoberto9/GithubBlog-Ignite'

    const { data } = await issuesApi.get<Issues>('', {
      params: {
        q: query === undefined ? repoName : query + repoName,
      },
    })

    setIssues(data.items)
    setFilter(data.items)
    setSize(data.total_count)
  }

  function search(query?: string) {
    if (query) {
      const filter: Issue[] = Issues.filter((issue) =>
        issue.title.toLowerCase().includes(query.toLowerCase()),
      )

      setFilter(filter)
      setSize(filter.length)

      return
    }

    setFilter(Issues)
    setSize(Issues.length)
  }

  function getIssueById(id: number) {
    return Issues.find((issue) => issue.id === id)
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{ Issues: filter, size, search, getIssueById }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
