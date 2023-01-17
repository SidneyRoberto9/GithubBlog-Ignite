import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-light']};
    }

    body {
        background-color: ${({ theme }) => theme['blue-800']};
        color:  ${({ theme }) => theme.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a, ins {
        text-decoration: none;
    }
`
