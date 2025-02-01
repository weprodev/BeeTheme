import styled, { css } from "styled-components";

import { fontSizes, fontWeights } from "../../shared/styleVariables";

const variations = {
  primary: css`
    color: var(--color-white);
  `,
  secondary: css`
    color: transparent;
    background-image: var(--gradient-secondary);
    -webkit-background-clip: text;
    background-clip: text;
  `,
};

const Heading = styled.h1<{ variation?: keyof typeof variations }>`
  line-height: 1.4;
  font-weight: ${fontWeights.bold};

  ${(props) => variations[props.variation || "primary"]}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: ${fontSizes.xl6};
    `}

    ${(props) =>
    props.as === "h2" &&
    css`
      font-size: ${fontSizes.xl5};
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.5rem;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: ${fontSizes.xl3};
    `}


    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: ${fontSizes.xl2};
    `}

  

    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: ${fontSizes.xl};
    `}
`;

export default Heading;
