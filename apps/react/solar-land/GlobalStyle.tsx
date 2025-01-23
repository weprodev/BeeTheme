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
`;

export default GlobalStyle;
