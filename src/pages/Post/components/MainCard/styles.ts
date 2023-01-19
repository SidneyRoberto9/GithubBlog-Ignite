import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainCardComponent = styled.section`
  width: 100%;
  height: 10.5rem;
  padding: 2rem;

  margin-top: -5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${({ theme }) => theme['blue-700']};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    padding: 0;
    margin: 0;

    font: 700 1.5rem 'Nunito', sans-serif;
    line-height: 1.3;
    color: ${({ theme }) => theme['blue-100']};
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  color: ${({ theme }) => theme['blue-light']};

  ins {
    font: 700 0.75rem 'Nunito', sans-serif;
    line-height: 1.6;
    text-transform: uppercase;
  }

  svg {
    margin-bottom: 0.135rem;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme['blue-light']};
  }
`

export const Navlink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  color: ${({ theme }) => theme['blue-light']};

  ins {
    font: 700 0.75rem 'Nunito', sans-serif;
    line-height: 1.6;
    text-transform: uppercase;
  }

  svg {
    margin-bottom: 0.135rem;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme['blue-light']};
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    ins {
      font: 400 1rem 'Nunito', sans-serif;
      line-height: 1.6;
      color: ${({ theme }) => theme['blue-150']};
    }

    svg {
      color: ${({ theme }) => theme['blue-400']};
    }
  }
`
