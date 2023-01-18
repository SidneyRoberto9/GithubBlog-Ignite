import styled from "styled-components";

export const CardContainer = styled.button`
  width: 100%;
  padding: 2rem;

  border: none;
  outline: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme['blue-600']};
  border-radius: 10px;
  cursor: pointer;

  h1 {
    font: 700 1.25rem 'Nunito', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme['blue-100']};

    height: 3.2em;
    text-align: left;
    overflow: hidden;
  }

  time {
    font: 400 0.875rem 'Nunito', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme['blue-300']};

    white-space: nowrap;
    align-self: flex-start;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }

  p {
    margin-top: 1.25rem;
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme['blue-200']};

    height: 6.4em;
    text-align: left;
    overflow: hidden;
  }
`
