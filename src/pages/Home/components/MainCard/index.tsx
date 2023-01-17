import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icons, Info, Link, MainCardContainer } from "./styles";

export function MainCard() {
  return (
    <MainCardContainer>
      <img src="https://avatars.githubusercontent.com/u/55926500?v=4" alt="" />

      <Info>
        <strong>Sidney Roberto</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          minima delectus debitis ut omnis provident, optio dolores aspernatur
          ex labore voluptate dicta ea, nam dolorem aut sequi adipisci. Rem,
          pariatur!
        </p>

        <Link target="_blank" href="https://www.github.com/SidneyRoberto9">
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
            <ins>SidneyRoberto9</ins>
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            <ins>RocketSeat</ins>
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <ins> 32 seguidores</ins>
          </span>
        </Icons>
      </Info>
    </MainCardContainer>
  )
}
