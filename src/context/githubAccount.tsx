import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { GithubAccount } from '../@types/github'
import { gitHubUserApi } from '../lib/axios'

interface GithubAccountContextType {
  account: GithubAccount
}

interface GithubAccountProviderProps {
  children: ReactNode
}

export const GithubAccountContext = createContext(
  {} as GithubAccountContextType,
)

export function GithubAccountProvider({
  children,
}: GithubAccountProviderProps) {
  const [GithubAccount, setGithubAccount] = useState<GithubAccount>(
    {} as GithubAccount,
  )

  async function getGithubAccount() {
    const { data } = await gitHubUserApi.get<GithubAccount>('SidneyRoberto9')

    setGithubAccount({ ...data })
  }

  useEffect(() => {
    getGithubAccount()
  }, [])

  return (
    <GithubAccountContext.Provider value={{ account: GithubAccount }}>
      {children}
    </GithubAccountContext.Provider>
  )
}
