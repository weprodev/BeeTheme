import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

  :root {
    --color-primary: #50cb8b;
    --color-secondary: #24222c;
    --color-tertiary: #ffffff;
    --color-grey: #717171;
    --color-grey-light: #bebebe;
    --color-grey-dark: rgb(113.5, 113.5, 113.5);
    --font-size-paragraph: 1.125em;
    --font-size-title: 1.5em;
    --font-size-heading-1: 4.5em;
    --font-size-heading-2: 3em;
    --font-size-heading-3: 2.25em;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }

  body {
    font-family: "Inter", sans-serif;
    min-height: 100vh;
  }

  .paragraph {
    font-size: var(--font-size-paragraph);
    font-weight: var(--font-weight-semibold);
    line-height: 1.8;
  }
  .paragraph--primary {
    color: var(--color-secondary);
  }
  .paragraph--secondary {
    color: var(--color-grey-dark);
  }
  .paragraph--tertiary {
    color: var(--color-grey-light);
  }

  .tag {
    padding: 0.5em 1.25em;
    border-radius: 9999px;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    text-align: center;
  }
  .tag--primary {
    color: var(--color-primary);
    background-color: #effff7;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
  }
  .title__arrow {
    transform: rotate(-45deg);
  }
  .title--primary {
    color: var(--color-secondary);
  }
  .title--secondary {
    color: var(--color-tertiary);
  }

  .heading-1,
  .heading-2,
  .heading-3 {
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }
  .heading-1--primary,
  .heading-2--primary,
  .heading-3--primary {
    color: var(--color-secondary);
  }
  .heading-1--secondary,
  .heading-2--secondary,
  .heading-3--secondary {
    color: var(--color-tertiary);
  }

  .heading-1 {
    font-size: var(--font-size-heading-1);
  }
  .heading-2 {
    font-size: var(--font-size-heading-2);
  }
  .heading-3 {
    font-size: var(--font-size-heading-3);
  }

  @media screen and (max-width: 75em) {
    .heading-1 {
      font-size: 3em;
    }
    .heading-2 {
      font-size: 2.25em;
    }
    .heading-3 {
      font-size: 1.875em;
    }
  }
  @media screen and (max-width: 40em) {
    .heading-1 {
      font-size: 2.25em;
    }
    .heading-2 {
      font-size: 1.875em;
    }
    .heading-3 {
      font-size: 1.5em;
    }
  }

  img,
  picture,
  svg,
  video {
    width: 100%;
    display: block;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
    font: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .dropdown {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75em;
  }
  .dropdown:hover .dropdown__content {
    display: flex;
  }
  .dropdown:hover .dropdown__icon {
    transform: rotate(180deg);
  }
  .dropdown .dropdown__content {
    display: none;
    position: absolute;
    z-index: 1;
    top: 100%;
    background-color: var(--color-tertiary);
    color: var(--color-secondary);
    border-radius: 0.375em;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    padding: 1em;
    gap: 0.5em;
    flex-direction: column;
    text-wrap: nowrap;
  }
  .dropdown__icon {
    transition: transform 150ms;
  }

  .button {
    background: transparent;
    color: var(--color-tertiary);
    border-radius: 9999px;
    border: none;
    padding: 1em 1.5em;
    font-size: 0.875em;
    font-weight: var(--font-weight-semibold);
    transition: 150ms;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-wrap: nowrap;
  }
  .button:hover {
    background-color: none;
    opacity: 70%;
  }
  .button--primary {
    background-color: var(--color-primary);
    color: var(--color-tertiary);
  }
  .button--secondary {
    background-color: var(--color-tertiary);
    color: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    gap: 0.75em;
  }
  .button--secondary .button__icon {
    transform: rotate(-45deg);
    font-size: 1.875em;
  }
  @media screen and (max-width: 40em) {
    .button--secondary .button__icon {
      font-size: 1.25em;
    }
  }

  .input-group {
    display: flex;
    border-radius: 9999px;
    padding: 0.75em;
    gap: 0.75em;
    justify-content: space-between;
  }
  .input-group__input {
    border: none;
    outline: none;
    flex-grow: 1;
  }
  .input-group__button {
    display: flex;
    gap: 0.5em;
  }
  .input-group--primary {
    background-color: var(--color-tertiary);
  }
`;

export default GlobalStyle;
