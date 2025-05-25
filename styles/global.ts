import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", Arial, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }

  body {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  * {
    box-sizing: inherit;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
    line-height: 1.62;
    color: ${({ theme }) => theme.text};   
  }

  p, li, span {
    margin: 0;
    font-weight: normal;
    line-height: 1.62;
    color: ${({ theme }) => theme.textBody};
  }

  main {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
