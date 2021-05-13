import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: clamp(0.75rem, 1rem, 1.25rem);
  }

  body {
    width: 100%;
    height: 100%;
  }

  a {
    transition: .5s;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 98%;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  li {
    margin-left: 20px;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }

  figcaption {
    text-align: center;
    font-style: italic;
    font-size: 0.75rem;
    margin-top: 10px;
  }

  p {
    line-height: 1.6;
  }

  strong {
    font-size: inherit;
  }

  b {
    font-size: inherit;
  }
`;
