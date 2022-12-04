import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar, div::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track, div::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb {
    background-color: #00000090;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid transparent;  /* creates padding around scroll thumb */
  }

  :root {
    --color-primary-light: #CFE0F7;
    --color-primary-medium: #6A93F9;
    --color-primary-dark: #021E67;

    --color-secondary-medium: #B8FA52;

    --color-white: #FBFFFB;
    --color-black: #32333B;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-primary-medium);
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
    cursor: pointer;
  }

  main {
    background-color: var(--color-primary-medium);
  }
`;
