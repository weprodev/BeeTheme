import styled, { css } from "styled-components";

import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";
import ShowLandHeading from "./Heading";
import Button from "./Button";

/*------------------------------------*\
  #STYLES
\*------------------------------------*/

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spaces[4]};
  margin: auto 0 ;
  ${generateMediaQuery(
    "mobile",
    css`
      gap: ${spaces[12]};
      font-size: ${fontSizes.lg};
    `
  )}
`;
const Tag = styled.span`
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeights.bold};
  text-transform: uppercase;
  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.lg};
    `
  )}
`;
const Heading = styled(ShowLandHeading)`
  width: 60%;
  ${generateMediaQuery(
    "mobile",
    css`
      width: auto;
    `
  )}
`;

/*------------------------------------*\
  #MARKUP
\*------------------------------------*/

const HeroText = () => {
  return (
    <StyledHeroText>
      <Tag>ultimate wordpress solurton</Tag>
      <Heading as="h1">Top-Notch Beautiful Design</Heading>
      <Button>Go to your store</Button>
    </StyledHeroText>
  );
};

export default HeroText;
