import generateMediaQuery from "../../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../../shared/styleVariables";
import styled, { css } from "styled-components";

export const FooterList = styled.footer`
  background-color: var(--dark-color);
  color: var(--light-color);
  padding: ${spaces[16]} ${spaces[8]};

  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[4]};
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      padding: ${spaces[3]};
    `
  )}
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  gap: ${spaces[8]};

  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
    `
  )}
`;

export const FooterTopTitle = styled.div`
  flex: 4;
`;

export const FooterTopTitleH2 = styled.h2`
  font-size: ${fontSizes.xl4};
  font-weight: ${fontWeights.bold};

  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.xl4};
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      font-size: ${fontSizes.xl3};
    `
  )}
`;

export const FooterTopTitleSpan = styled.span`
  color: var(--secondary-color);
`;

export const FooterTopTitleP = styled.p`
  color: var(--light-color);
  display: inline-block;
  margin: ${spaces[5]};
  margin-left: 0;
`;

export const FooterTopTitleCheck = styled.svg`
  width: 1em;
  height: 1em;
  background-color: var(--primary-color);
  border-radius: ${borderRadius.full};
  color: var(--dark-color);
  display: inline-block;
`;

export const FooterTopDescription = styled.div`
  flex: 3;
`;

export const FooterTopDescriptionP = styled.p`
  line-height: 1.5;
  margin-bottom: ${spaces[5]};
`;

export const Button = styled.button`
  background: var(--light-color);
  color: var(--dark-color);
  border-radius: 9999px;
  border: none;
  padding: 1em;
  font-size: 1em;
  font-weight: 400;
  transition: 150ms;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const ArrowIcon = styled.svg`
  width: 1.2em;
  height: 1.2em;
  padding-left: ${spaces[1]};
  padding-top: ${spaces[1]};
  display: inline-block;

  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[8]}; 0 ${spaces[3]};;
      gap: ${spaces[2]};
    `
  )}
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spaces[16]} 0 ${spaces[6]};
  border-bottom: 1px solid var(--secondary-color);

  ${generateMediaQuery(
    "mobile",
    css`
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(2, 1fr);
      padding: ${spaces[8]} 0 ${spaces[3]};
      gap: ${spaces[2]};
    `
  )}
`;

export const Logo = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;

export const LogoImg = styled.img`
  height: 2.5rem;
  width: auto;
`;

export const Navigation = styled.nav`
  ${generateMediaQuery(
    "mobile",
    css`
      grid-area: 2/1/4/2;
    `
  )}
`;

export const NavigationUl = styled.ul`
  display: flex;
  list-style: none;
  gap: ${spaces[8]};

  ${generateMediaQuery(
    "laptop",
    css`
      gap: 0;
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
      gap: ${spaces[5]};
    `
  )}
`;

export const NavigationA = styled.a`
  text-decoration: none;
  color: var(--light-color);
  font-weight: ${fontWeights.regular};
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const NavigationLi = styled.li`
  ${generateMediaQuery(
    "laptop",
    css`
      border-right: 1px solid var(--secondary-color);
      padding: 0 ${spaces[3]};
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      border: none;
    `
  )}
`;

export const ActionButtons = styled.button`
  display: flex;
  gap: ${spaces[4]};
  background: none;
  border: none;

  ${generateMediaQuery(
    "mobile",
    css`
      grid-area: 2/2/4/3;
      flex-wrap: wrap;
    `
  )}
`;

export const Social = styled.ul`
  background: var(--secondary-color);
  color: var(--light-color);
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeights.bold};
  border-radius: ${borderRadius.full};
  padding: ${spaces[2]};
  line-height: 1;
  width: 2em;
  height: 2em;

  ${generateMediaQuery(
    "mobile",
    css`
      width: 4em;
      height: 4em;
    `
  )}
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${spaces[8]} 0 0;
`;

export const FooterBottomLinksA = styled.a.attrs({
  href: "#",
})`
  margin-left: ${spaces[3]};
`;
