import { createGlobalStyle } from "styled-components";

import { fontWeights } from "../shared/styleVariables";
import generateMediaQuery from "../shared/generateMediaQuery";

const GlobalStyle = createGlobalStyle`
    :root{
        /*------------------------------------*\
            #COLOR
        \*------------------------------------*/
        --color-primary: #448851;
        --color-secondary: #0d27a7;
        --color-tertiary: #6741d9;
        --color-fourth: #343a40;
        --color-fifth: #1864ab;
        --color-sixth: #0e1523;
        --color-seventh: #c92a2a;
        --color-eighth: #087f5b;
        --color-ninth: #364fc7;
        --color-tenth: #0f1429;
        --color-eleventh: #ffffff0b;
        --color-twelfth: #00092e;
        --color-thirteenth: #554df0;
        --color-fourteenth: #74d3af;
        --color-fifteenth: #ffffffb7;
        --color-sixteenth: #ffffffe9;
        --color-eighteenth: #1eff00;

        --color-white: #fff;
        --color-black: #000;

        --color-grey-dark: #777;
        --color-grey-dark-2: #999;
        --color-grey-dark-3: #333;

        --gradient-primary: linear-gradient(to right, var(--color-secondary), var(--color-primary));
        --gradient-secondary: linear-gradient(to right, var(--color-eighth), var(--color-seventh));
        --gradient-tertiary : linear-gradient(to right, var(--color-tertiary), var(--color-fourteenth));    

        /*------------------------------------*\
            #FONTS
        \*------------------------------------*/
        --default-font-size: 1.6rem;
        --primary-font-family: "Lato", sans-serif;
    }   

    html{
        font-size: 90%;
        ${generateMediaQuery("lcd", "font-size: 100%")}
        ${generateMediaQuery("led", "font-size: 110%")}
        ${generateMediaQuery("led4k", "font-size: 130%")}
        ${generateMediaQuery("laptop", "font-size: 80%")}
        ${generateMediaQuery("mobile", "font-size: 90%")}
    }

    body{
        font-family: var(--primary-font-family);
        line-height: 1.7;
        font-weight: ${fontWeights.regular};
        color: var(--color-white); 
    }

    svg{
        width: auto;
    }

`;

export default GlobalStyle;
