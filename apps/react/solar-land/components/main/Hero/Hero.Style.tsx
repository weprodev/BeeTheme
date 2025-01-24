import styled, { css } from "styled-components";
import generateMediaQuery from "../../../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../../../shared/styleVariables";
import ImgSrc from "../../../images/main-hero.jpg";

export const HeroStyle = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  background: url(${ImgSrc}) center/cover no-repeat;
  color: var(--light-color);
  text-align: left;
  padding: ${spaces[4]} ${spaces[12]};
  margin: 0 auto;
  border-radius: ${borderRadius.xl3};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
    border-radius: ${borderRadius.xl3};
  }

  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
      padding: 0;
      height: 80vh;
    `
  )}
`;

export const HeroContent = styled.div`
  z-index: 1;
  max-width: 80%;

  ${generateMediaQuery(
    "laptop",
    css`
      max-width: 65%;
    `
  )}

  ${generateMediaQuery(
    "tablet",
    css`
      max-width: 50%;
    `
  )}

 ${generateMediaQuery(
    "mobile",
    css`
      max-width: 100%;
      padding: ${spaces[8]} ${spaces[4]} ${spaces[4]};
    `
  )}
`;

export const Tagline = styled.div`
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeights.medium};
  margin-bottom: ${spaces[2]};
  color: rgba(255, 255, 255, 0.7);
`;

export const Title = styled.h1`
  font-size: ${fontSizes.xl9};
  font-weight: ${fontWeights.bold};

  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.xl6};
    `
  )}

  ${generateMediaQuery(
    "tablet",
    css`
      font-size: ${fontSizes.xl4};
    `
  )}
`;

export const Actions = styled.div`
  display: flex;
  gap: ${spaces[4]};
  justify-content: flex-start;
  margin-top: ${spaces[4]};
`;

export const GetInTouch = styled.button`
  background: none;
  color: var(--light-color);
  padding: ${spaces[2]} ${spaces[4]};
  border-bottom: 1px solid var(--light-color);
  border-top-width: initial;
  border-right-width: initial;
  border-left-width: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border-radius: 0px;
  border-style: none none solid;
  border-image: initial;
  transition: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const OurServices = styled.button`
  background: none;
  color: var(--light-color);
  padding: ${spaces[2]} ${spaces[4]};
  border-bottom: 1px solid var(--light-color);
  border-top-width: initial;
  border-right-width: initial;
  border-left-width: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border-radius: 0px;
  border-style: none none solid;
  border-image: initial;
  transition: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const RecentProject = styled.div`
  position: absolute;
  top: 30%;
  right: ${spaces[8]};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: ${spaces[4]};
  width: 15.625em;
  height: 15.625em;

  ${generateMediaQuery(
    "mobile",
    css`
      position: relative;
      transform: none;
      top: 0;
      right: 0;
    `
  )}
`;

export const RecentProjectItem = styled.div`
  background-color: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(5px);
  padding: ${spaces[2]};
  border-radius: ${borderRadius.xl2};
  transition: transform 0.3s ease;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: ${spaces[2]};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${borderRadius.lg};
  aspect-ratio: 1 / 1;
  object-fit: cover;
  grid-area: 1 / 1 / 5 / 5;

  ${generateMediaQuery(
    "mobile",
    css`
      aspect-ratio: 16 / 9;
    `
  )}
`;

export const RecentProjectOptions = styled.div`
  grid-area: 1 / 5 / 5 / 6;
  grid-column-start: 5;
`;

export const RecentProjectOptionsButton = styled.button`
  background: none;
  color: var(--light-color);
  padding: ${spaces[2]};
  border-radius: ${borderRadius.full};
  border: none;
  width: 2.625em;
  height: 2.625em;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const RecentProjectButton = styled.button`
  background: none;
  color: var(--light-color);
  padding: ${spaces[2]};
  border-radius: ${borderRadius.full};
  border: 1px solid var(--light-color);
  width: 2.625em;
  height: 2.625em;
  grid-area: 5 / 1 / 6 / 3;
  font-size: 1em;
  font-weight: 400;
  transition: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ArrowIcon = styled.svg`
  padding: 0;
  cursor: pointer;
`;

export const RecentProjectCaption = styled.div`
  color: #fff;
  font-size: ${fontSizes.sm};
  text-align: center;
  margin-top: ${spaces[2]};
  grid-area: 5 / 3 / 6 / 6;
`;

export const ArrowICON = styled.svg`
  width: 1.1em;
  height: 1.1em;
  padding-left: ${spaces[2]};
  display: inline-block;
`;

export const Statistics = styled.div`
  background-color: #fff;
  color: var(--dark-color);
  position: absolute;
  display: flex;
  gap: ${spaces[4]};
  bottom: 0;
  right: 0;
  padding: ${spaces[5]};
  border-radius: ${borderRadius.xl3} 0 0 0;
  max-width: 50%;

  ${generateMediaQuery(
    "mobile",
    css`
      position: relative;
      max-width: 100%;
      border-radius: 0;
      padding: ${spaces[2]};
      gap: ${spaces[2]};
    `
  )}
`;

export const StatItem = styled.div`
  padding: ${spaces[2]};
`;

export const StatValue = styled.div`
  font-size: ${fontSizes.xl4};
  font-weight: ${fontWeights.bold};

  ${generateMediaQuery(
    "mobile",
    css`
      font-size: ${fontSizes.xl2};
    `
  )}
`;

export const StatLabel = styled.div``;
