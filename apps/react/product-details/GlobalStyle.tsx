import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root{
    /*------------------------------------*\
            #COLOR
    \*------------------------------------*/
    --color-primary: linear-gradient(
      310deg,
      #845ec2,
      #d65db1,
      #ff6f91,
      #ff9671,
      #ffc75f
  );
  --color-secondary: #ff5e57;
  --color-tertiary:#59468c;
  --color-fourth:#ecf0f1;
  --color-fifth:#2fdc81;
  --color-sixth: rgb(0 0 0 / 0.05);
  --color-seventh: rgba(0, 0, 0, 0.5);;
  --color-white: #fff;
  --color-black: #000;

/*------------------------------------*\
  #FONT
\*------------------------------------*/ 

--primary-font-family : "Inter" ,sans-serif;

/*------------------------------------*\
  #BORDER
\*------------------------------------*/ 

--primary-border : 1px solid $clouds;

/*------------------------------------*\
  #BOX SHADOW
\*------------------------------------*/

--shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
body{
font-family: var(--primary-font-family);
color: var(--color-white) ;
}
    
::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.4rem;
}


::-webkit-scrollbar-thumb {
  background: var(--color-secondary);
  border-radius: 0.75rem;
  &:hover {
    background: #ff5f57d0
  }
}

`;
export default GlobalStyle;
