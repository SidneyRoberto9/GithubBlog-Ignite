import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Issue } from '../../../../@types/github';
import { Icons, Links, MainCardComponent, Nav, Navlink } from './styles';

interface MainCardProps {
  currentIssue: Issue
}

export function MainCard({ currentIssue }: MainCardProps) {
  return (
    <MainCardComponent>
      <Links>
        <Nav to={'/'}>
          <FontAwesomeIcon icon={faAngleLeft} width={11.25} height={11.25} />
          <ins>voltar</ins>
        </Nav>

        <Navlink href={currentIssue.html_url} target={'_blank'}>
          <ins>ver no github</ins>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            width={11.25}
            height={11.25}
          />
        </Navlink>
      </Links>

      <h1>{currentIssue.title}</h1>

      <Icons>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <ins>SidneyRoberto9</ins>
        </span>

        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <ins>
            {' '}
            {formatDistanceToNow(new Date(currentIssue.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </ins>
        </span>

        <span>
          <FontAwesomeIcon icon={faComment} />
          <ins>{currentIssue.comments + ' '} Comentários</ins>
        </span>
      </Icons>
    </MainCardComponent>
  )
}
