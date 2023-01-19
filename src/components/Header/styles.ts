import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme['blue-700']};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 1.25rem;
  padding: 4rem;

  background-color: ${({ theme }) => theme['blue-700']};

  h1 {
    color: ${({ theme }) => theme['blue-light']};
    font: 400 1.5rem 'Coda', cursive;
    line-height: 1.6;
    padding-bottom: 4.375rem;
  }
`
