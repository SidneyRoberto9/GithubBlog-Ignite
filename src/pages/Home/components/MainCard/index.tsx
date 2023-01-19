import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContextSelector } from 'use-context-selector'

import { GithubAccountContext } from '../../../../context/githubAccount'
import { Icons, Info, Link, MainCardContainer } from './styles'

export function MainCard() {
  const accountData = useContextSelector(
    GithubAccountContext,
    ({ account }) => account,
  )

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
