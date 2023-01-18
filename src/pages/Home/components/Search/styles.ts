import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;

  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font: 700 1.125rem 'Nunito', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme['blue-150']};
    text-align: left;
  }

  p {
    font: 400 0.8755rem 'Nunito', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme['blue-300']};
    text-align: right;
  }

  section {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    border: none;
    outline: none;

    width: 100%;
    height: 50px;

    padding: 1rem 0.875rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['blue-500']};
    background-color: ${({ theme }) => theme['blue-900']};

    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;

    &::placeholder {
      color: ${({ theme }) => theme['blue-400']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme['blue-light']};
      color: ${({ theme }) => theme['blue-200']};
    }
  }
`
