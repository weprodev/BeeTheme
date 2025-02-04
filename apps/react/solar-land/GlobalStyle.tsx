import { fontWeights } from "../shared/styleVariables";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /*------------------------------------*\
            #COLORS
        \*------------------------------------*/
    
        --primary-color: #0dd47e;
        --secondary-color: #8d959d;
        --dark-color: #1e1e1e;
        --light-color: #f2f4f4;
        --white-color: #fff
        --misty-white: rgba(255, 255, 255, 0.7)
        --soft-whisper-white: rgba(255, 255, 255, 0.1);
        --ethereal-white: rgba(255, 255, 255, 0.18);
        --shadow-mist: rgba(0, 0, 0, 0.3);

        /*------------------------------------*\
            #FONTS
        \*------------------------------------*/
        --primaryFontFamily: "Quicksand";
    
      }

    body {
      font-family: sans-serif;
      font-weight: ${fontWeights.medium};
      font-optical-sizing: auto;
      font-style: normal;
    }

    .quicksand-bold {
      font-family: "Quicksand", sans-serif;
      font-weight: 700;
      font-optical-sizing: auto;
      font-style: normal;
    }

    .container {
      width: 100%;

        @media (min-width: 640px) {
          max-width: 630px;
        }

        @media (min-width: 768px) {
          max-width: 758px;
        }

        @media (min-width: 1024px) {
          max-width: 1014px;
        }

        @media (min-width: 1280px) {
          max-width: 1260px;
        }

        @media (min-width: 1536px) {
          max-width: 1536px;
        }
    }

`;

export default GlobalStyle;
