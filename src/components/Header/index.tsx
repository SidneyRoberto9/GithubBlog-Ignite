import left from '../../assets/left-effect.svg';
import right from '../../assets/right-effect.svg';
import terminal from '../../assets/terminal.svg';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={left} alt="" />

      <HeaderContent>
        <img src={terminal} alt="" />
        <h1>GITHUB BLOG</h1>
      </HeaderContent>

      <img src={right} alt="" />
    </HeaderContainer>
  )
}
