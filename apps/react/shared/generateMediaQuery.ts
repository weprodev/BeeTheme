import { css } from "styled-components";
import { RuleSet } from "styled-components";

/*--------------------------------
*** Breakpoint Values
**
miniMobile    ---> MAX-WIDTH : 400PX  OR 25em
mobile         ---> MAX-WIDTH : 640PX  OR 40em 
retinaMobile  ---> MAX-WIDTH : 767PX  OR 47.9375em 
tablet         ---> MAX-WIDTH : 992px  OR 62em 
miniLaptop    ---> MAX-WIDTH : 1024px OR 64em
laptop         ---> MAX-WIDTH : 1200px OR 75em
lcd            ---> MIN-WIDTH : 1201px OR 75.0625em
led            ---> MIN-WIDTH : 1400px OR 87.5em
led4k          ---> MIN-WIDTH : 2560px OR 160em
*/

const breakpointValues = {
  miniMobile: "25em",
  mobile: "40em",
  retinaMobile: "47.9375em",
  tablet: "62em",
  miniLaptop: "64em",
  laptop: "75em",
  lcd: "75.0625em",
  led: "87.5em",
  led4k: "160em",
};

type BreakpointName = keyof typeof breakpointValues;

function generateMediaQuery(
  breakpointName: BreakpointName,
  ruleset: string | RuleSet<object>
) {
  const lrgBreakpoints = ["lcd", "led", "led4k"];

  const minOrMax = lrgBreakpoints.includes(breakpointName) ? "min" : "max";

  return css`
    @media screen and (${minOrMax}-width: ${breakpointValues[breakpointName]}) {
      ${ruleset}
    }
  `;
}

export default generateMediaQuery;
