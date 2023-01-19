import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

import { Issue } from "../@types/github";

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
    const { data } = await axios.get(
      'https://api.github.com/search/issues?q=%20repo:SidneyRoberto9/GithubBlog-Ignite',
    )

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
