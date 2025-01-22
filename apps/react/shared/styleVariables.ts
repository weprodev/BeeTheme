/*------------------------------------*\
  #FONT
\*------------------------------------*/

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const fontSizes = {
  xs: "0.75em",
  sm: "0.875em",
  base: "1em",
  lg: "1.125em",
  xl: "1.25em",
  xl2: "1.5em",
  xl3: "1.875em",
  xl4: "2.25em",
  xl5: "3em",
  xl6: "3.75em",
  xl7: "4.5em",
  xl8: "5em",
  xl9: "6em",
};

/*------------------------------------*\
  #SPACES (padding & margin & gap) 
\*------------------------------------*/

export const spaces = Array.from({ length: 32 }, (_, i) => `${i * 0.25}em`);

/*------------------------------------*\
  #TRANSITION DURATION
\*------------------------------------*/

export const durations = {
  75: "75ms",
  100: "100ms",
  150: "150ms",
  200: "200ms",
  300: "300ms",
  500: "500ms",
  700: "700ms",
  1000: "1000ms",
};

/*------------------------------------*\
  #BORDER RADIUS
\*------------------------------------*/

export const borderRadius = {
  sm: "0.125em",
  base: "0.25em",
  md: "0.375em",
  lg: "0.5em",
  xl: "0.75em",
  xl2: "1em",
  xl3: "1.5em",
  xl4: "2em",
  full: "9999px",
};
