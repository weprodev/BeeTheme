import React from "react";
import {
  ActionButtons,
  ArrowIcon,
  Button,
  Container,
  FooterBottom,
  FooterBottomLinksA,
  FooterList,
  FooterNav,
  FooterTop,
  FooterTopDescription,
  FooterTopDescriptionP,
  FooterTopTitle,
  FooterTopTitleCheck,
  FooterTopTitleH2,
  FooterTopTitleP,
  FooterTopTitleSpan,
  Logo,
  LogoImg,
  Navigation,
  NavigationA,
  NavigationUl,
  Social,
} from "./Footer.Style";

import ImgSrc from "../../images/solarland-logo.png";
import { Li } from "../Header/Header.Styles";

interface SvgPathProps {
  xmlns?: string;
  d: string;
  type?: "ArrowIcon" | "FooterTopTitleCheck";
}

const SvgPath: React.FC<SvgPathProps> = ({
  d,
  xmlns = "http://www.w3.org/2000/svg",
  type,
}) => {
  if (type === "ArrowIcon") {
    return (
      <ArrowIcon
        xmlns={xmlns}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </ArrowIcon>
    );
  } else {
    return (
      <FooterTopTitleCheck
        xmlns={xmlns}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </FooterTopTitleCheck>
    );
  }
};

const Footer: React.FC = () => {
  return (
    <FooterList>
      <Container className="container">
        <FooterTop>
          <FooterTopTitle>
            <FooterTopTitleH2>
              it's time to support zero pollution,
              <FooterTopTitleSpan>with renewable resources</FooterTopTitleSpan>
            </FooterTopTitleH2>

            <FooterTopTitleP>
              <SvgPath d="m4.5 12.75 6 6 9-13.5" type="FooterTopTitleCheck" />{" "}
              Experienced for more than 10 years
            </FooterTopTitleP>
            <FooterTopTitleP>
              <SvgPath d="m4.5 12.75 6 6 9-13.5" type="FooterTopTitleCheck" />{" "}
              Support for the latest technology
            </FooterTopTitleP>
          </FooterTopTitle>

          <FooterTopDescription>
            <FooterTopDescriptionP>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo velit et minus eius assumenda, eligendi repudiandae
              nesciunt, ad impedit ipsa blanditiis deserunt optio illum?
              Perferendis, et. Dolore corporis magnam tempora.
            </FooterTopDescriptionP>

            <Button>
              Get in touch
              <SvgPath
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                type="ArrowIcon"
              />
            </Button>
          </FooterTopDescription>
        </FooterTop>

        <FooterNav>
          <Logo>
            <LogoImg src={ImgSrc} alt="SolarLand Logo" />
          </Logo>

          <Navigation>
            <NavigationUl>
              <Li>
                <NavigationA href="#home">Home</NavigationA>
              </Li>
              <Li>
                <NavigationA href="#about">About Us</NavigationA>
              </Li>
              <Li>
                <NavigationA href="#features">Features</NavigationA>
              </Li>
              <Li>
                <NavigationA href="#services">Services</NavigationA>
              </Li>
              <Li>
                <NavigationA href="#contact">Contact</NavigationA>
              </Li>
            </NavigationUl>
          </Navigation>

          <ActionButtons>
            <Social>IN</Social>
            <Social>X</Social>
            <Social>F</Social>
            <Social>IG</Social>
          </ActionButtons>
        </FooterNav>

        <FooterBottom>
          <p>© 2024 SolarLand</p>

          <div>
            <FooterBottomLinksA>Terms of Services</FooterBottomLinksA>
            <FooterBottomLinksA>Privacy Policy</FooterBottomLinksA>
          </div>
        </FooterBottom>
      </Container>
    </FooterList>
  );
};

export default Footer;
