import styled from "styled-components";

export const MainCardContainer = styled.section`
  width: 100%;
  height: 13.25rem;
  padding: 2rem;

  margin-top: -5rem;

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${({ theme }) => theme['blue-700']};

  display: grid;
  grid-template-columns: calc(148px + 2rem) 1fr;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.5rem 0;

  strong {
    font: 700 1.5rem 'Nunito', sans-serif;
    line-height: 1.3rem;
    color: ${({ theme }) => theme['blue-100']};
  }

  p {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6rem;
    color: ${({ theme }) => theme['blue-200']};

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.6rem;

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

export const Link = styled.a`
  position: absolute;
  right: 2.25rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  color: ${({ theme }) => theme['blue-light']};

  span {
    font: 700 0.75rem 'Nunito', sans-serif;
    line-height: 1.6;
  }

  svg {
    margin-bottom: 0.135rem;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme['blue-light']};
  }
`
