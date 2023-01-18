import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icons, Links, MainCardComponent, Nav, Navlink } from "./styles";

export function MainCard() {
  return (
    <MainCardComponent>
      <Links>
        <Nav to={'/'}>
          <FontAwesomeIcon icon={faAngleLeft} width={11.25} height={11.25} />
          <ins>voltar</ins>
        </Nav>

        <Navlink
          href={
            'https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1'
          }
          target={'_blank'}
        >
          <ins>ver no github</ins>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            width={11.25}
            height={11.25}
          />
        </Navlink>
      </Links>

      <h1>JavaScript data types and data structures</h1>

      <Icons>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <ins>SidneyRoberto9</ins>
        </span>

        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <ins>Há 1 dia</ins>
        </span>

        <span>
          <FontAwesomeIcon icon={faComment} />
          <ins>5 Comentários</ins>
        </span>
      </Icons>
    </MainCardComponent>
  )
}
