import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { Issue } from '../@types/github'
import { issuesApi } from '../lib/axios'

interface IssuesContextType {
  Issues: Issue[]
  search: (query?: string) => void
  getIssueById: (id: number) => Issue | undefined
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [Issues, setIssues] = useState<Issue[]>([])

  async function getIssues(query?: string) {
    const repoName = '%20repo:SidneyRoberto9/GithubBlog-Ignite'

    const { data } = await issuesApi.get('', {
      params: {
        q: query === undefined ? repoName : query + repoName,
      },
    })

    setIssues(data.items)
  }

  function getIssueById(id: number) {
    return Issues.find((issue) => issue.id === id)
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ Issues, search: getIssues, getIssueById }}>
      {children}
    </IssuesContext.Provider>
  )
}
