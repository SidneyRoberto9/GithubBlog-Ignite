import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { gitHubUserApi } from "../../../../lib/axios";
import { Icons, Info, Link, MainCardContainer } from "./styles";

interface GithubAccount {
  bio: string
  name: string
  login: string
  company: string
  html_url: string
  followers: number
  avatar_url: string
}

export function MainCard() {
  const [accountData, setAccountData] = useState<GithubAccount>(
    {} as GithubAccount,
  )

  async function getGithubAccount() {
    const { data } = await gitHubUserApi.get('SidneyRoberto9')

    setAccountData({
      bio: data.bio,
      name: data.name,
      login: data.login,
      company: data.company,
      html_url: data.html_url,
      followers: data.followers,
      avatar_url: data.avatar_url,
    })
  }

  useEffect(() => {
    getGithubAccount()
  }, [])

  return (
    <MainCardContainer>
      <img src={accountData.avatar_url} alt="" />

      <Info>
        <strong>{accountData.name}</strong>
        <p>{accountData.bio}</p>

        <Link target="_blank" href={accountData.html_url}>
          <span>GITHUB</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            width={11.25}
            height={11.25}
          />
        </Link>

        <Icons>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <ins>{accountData.login}</ins>
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            <ins>
              {accountData.company == null
                ? 'Sem Companhia'
                : accountData.company}
            </ins>
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <ins> {accountData.followers + ' '} seguidores</ins>
          </span>
        </Icons>
      </Info>
    </MainCardContainer>
  )
}
