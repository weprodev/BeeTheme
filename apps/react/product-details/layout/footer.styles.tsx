import styled, { css } from "styled-components";
import generateMediaQuery from "../../shared/generateMediaQuery";
import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import backgroundImage from "../images/weprodev-3.jpg";

export const Section = styled.section`
  padding: ${spaces[16]} 0;
  color: var(--color-white);
  line-height: 1.7;
  font-weight: ${fontWeights.regular};
  background-image: linear-gradient(var(--color-eighth), var(--color-eighth)),
    url(${backgroundImage});
  background-size: cover;
  ${generateMediaQuery(
    "mobile",
    css`
      background-position: center;
    `
  )}
`;

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spaces[16]};
  ${generateMediaQuery(
    "laptop",
    css`
      font-size: 80%;
    `
  )}
  ${generateMediaQuery(
    "miniLaptop",
    css`
      display: flex;
      flex-direction: column;
    `
  )}
`;
export const Item = styled.div``;
export const Headline = styled.h1`
  font-size: 2.4rem;
  margin-bottom: ${spaces[7]};
  font-weight: ${fontWeights.bold};
`;

export const Paragraph = styled.p`
  font-size: ${fontSizes.xl2};
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  gap: ${spaces[2]};
  margin-bottom: ${spaces[8]};
  font-size: ${fontSizes.xl2};
  ${generateMediaQuery(
    "miniLaptop",
    css`
      margin-right: 25rem;
    `
  )}
  ${generateMediaQuery(
    "mobile",
    css`
      margin-right: 10rem;
    `
  )}
`;

export const EmailAddress = styled.p`
  display: flex;
  gap: ${spaces[2]};
  font-size: ${fontSizes.xl2};
  ${generateMediaQuery(
    "miniLaptop",
    css`
      margin-right: 25rem;
    `
  )}
  ${generateMediaQuery(
    "mobile",
    css`
      margin-right: 10rem;
    `
  )}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spaces[2]};
  margin-top: ${spaces[14]};
`;

export const Input = styled.input`
  width: 25rem;
  padding: ${spaces[2]};
  font-size: 1.1rem;
  border-radius: 0.4rem;
  border: var(--color-white) solid 0.1rem;
  font-family: inherit;
  background-color: var(--color-black);
  transition: all 0.6s;
  color: var(--color-white);
  margin-bottom: ${spaces[1]};
  &:hover,
  &:active {
    border: var(--color-secondary) solid 0.1rem;
  }
  &:focus {
    outline: none;
  }
  ${generateMediaQuery(
    "mobile",
    css`
      width: 18rem;
    `
  )};
`;

export const Button = styled.button`
  padding: ${spaces[2]};
  font-size: 1.2rem;
  background-color: var(--color-secondary);
  border-radius: 0.4rem;
  border: none;
  transition: all 0.6s;
  color: var(--color-white);
  cursor: pointer;
  &:link {
    background-color: var(--color-secondary);
  }
  &:hover {
    background-color: #fb4a41;
  }
  ${generateMediaQuery(
    "miniLaptop",
    css`
      width: 25rem;
    `
  )};
  ${generateMediaQuery(
    "mobile",
    css`
      width: 18rem;
    `
  )};
`;

export const Border = styled.div`
  margin-top: ${spaces[20]};
  margin-bottom: ${spaces[4]};
  border-bottom: var(--color-eleventh) solid 0.15rem;
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const CopyInfo = styled.p`
  color: var(--color-tenth);
`;
