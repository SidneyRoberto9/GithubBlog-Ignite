import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { GithubAccount } from "../../../../@types/github";
import { gitHubUserApi } from "../../../../lib/axios";
import { Icons, Info, Link, MainCardContainer } from "./styles";

export function MainCard() {
  const [accountData, setAccountData] = useState<GithubAccount>(
    {} as GithubAccount,
  )

  async function getGithubAccount() {
    const { data } = await gitHubUserApi.get<GithubAccount>('SidneyRoberto9')

    setAccountData({ ...data })
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
