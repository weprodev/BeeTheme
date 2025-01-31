import styled, { css } from "styled-components";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;

  a {
    transition: 300ms;
  }
  a:hover {
    color: var(--color-secondary);
  }
`;
export const TopSection = styled.div`
  width: 100%;
  padding-inline: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${spaces[4]};
  gap: ${spaces[4]};
  background-color: var(--color-white);
  box-shadow: var(--shadow);
  border-bottom: 1px solid var(--color-fourth);
  ${generateMediaQuery(
    "laptop",
    css`
      padding-inline: ${spaces[6]};
    `
  )}
  ${generateMediaQuery(
    "mobile",
    css`
      flex-wrap: wrap;
    `
  )}
`;

export const Img = styled.img`
  width: 8rem;
`;

export const Language = styled.div`
  ${generateMediaQuery(
    "mobile",
    css`
      display: none;
    `
  )}
`;
export const LanguageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces[2]};
  cursor: default;
  padding: ${spaces[2]} 0;
  color: var(--color-black);
`;

export const IconLanguage = styled.span``;
export const IconDown = styled.span`
  transition: 150ms;

  &:hover {
    transform: scale(1.2);
  }
`;
export const ListInfo = styled.ul`
  width: 6%;
  left: 20%;
  top: 50%;

  border-radius: ${borderRadius.base};
  flex-direction: column;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.2);
  background-color: var(--color-white);
  position: absolute;
  ${generateMediaQuery(
    "mobile",
    css`
      display: none;
    `
  )}
`;
export const ListItems = styled.li`
  padding: ${spaces[3]};
  color: var(--color-black);
`;

export const SelectLanguage = styled.a``;

export const SearchBox = styled.div`
  display: flex;
  margin-left: auto;
  background-color: var(--color-secondary);
  padding: ${spaces[1]};
  border-radius: ${borderRadius.full};
  ${generateMediaQuery(
    "mobile",
    css`
      order: 2;
      margin: 0 auto;
      width: 100%;
    `
  )}
`;
export const Search = styled.input`
  transition: 300s;
  width: 10rem;
  color: var(--color-white);
  border: none;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: var(--color-white);
  }
  ${generateMediaQuery(
    "mobile",
    css`
      width: 100%;
      margin-left: ${spaces[2]};
    `
  )};
`;
export const IconSearch = styled.button`
  cursor: pointer;
  padding: ${spaces[3]};
  border-radius: ${borderRadius.full};
  border: none;
  color: var(--color-white);
  background-color: var(--color-secondary);
  ${generateMediaQuery(
    "mobile",
    css`
      color: var(--color-black);
      background-color: var(--color-white);
    `
  )}
`;
export const ButtonsContainer = styled.div`
  ${generateMediaQuery(
    "mobile",
    css`
      margin-left: auto;
    `
  )}
`;
export const ButtonLogin = styled.button`
  cursor: pointer;
  border-radius: ${borderRadius.base};
  padding: ${spaces[4]} ${spaces[6]};
  transition: 150ms;
  font-weight: ${fontWeights.semiBold};
  border: 0.1rem solid var(--color-secondary);
  &:hover {
    opacity: 0.5;
  }
  color: var(--color-secondary);
  background-color: var(--color-white);
`;
export const ButtonFree = styled.button`
  cursor: pointer;
  border-radius: ${borderRadius.base};
  padding: ${spaces[4]} ${spaces[6]};
  transition: 150ms;
  background-color: var(--color-secondary);
  font-weight: ${fontWeights.semiBold};
  border: 0.1rem solid var(--color-secondary);

  &:hover {
    opacity: 0.5;
  }

  color: var(--color-fourth);
  margin-left: ${spaces[1]};
  ${generateMediaQuery(
    "mobile",
    css`
      display: none;
    `
  )}
`;
export const Navbar = styled.nav`
  width: 100%;
  padding-inline: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  padding-block: ${spaces[6]};
  background-color: var(--color-white);
  ${generateMediaQuery(
    "laptop",
    css`
      padding-inline: ${spaces[6]};
    `
  )}
`;
export const Menu = styled.ul`
  font-size: ${fontSizes.xl};
  display: flex;
  gap: ${spaces[4]};
  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.xl};
    `
  )}
`;
export const MenuItems = styled.li`
  color: var(--color-black);
`;
export const Link = styled.a``;
