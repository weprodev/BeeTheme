import * as React from "react";
import solarlandLogo from "../../images/solarland-logo.png";

import {
  A,
  ActionButtons,
  GetInTouch,
  Hamburger,
  Img,
  Li,
  Login,
  Logo,
  Navigation,
  Span,
  HeaderList,
  Ul,
} from "./Header.Styles";

const Header: React.FC = () => {
  return (
    <HeaderList className="container">
      <Logo>
        <Img src={solarlandLogo} alt="SolarLand Logo" />
      </Logo>

      <Hamburger aria-label="Toggle navigation">
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </Hamburger>

      <Navigation>
        <Ul>
          <Li>
            <A href="#home">Home</A>
          </Li>
          <Li>
            <A href="#about">About Us</A>
          </Li>
          <Li>
            <A href="#features">Features</A>
          </Li>
          <Li>
            <A href="#services">Services</A>
          </Li>
          <Li>
            <A href="#contact">Contact</A>
          </Li>
        </Ul>
      </Navigation>

      <ActionButtons>
        <Login>Login</Login>
        <GetInTouch>Get in Touch</GetInTouch>
      </ActionButtons>
    </HeaderList>
  );
};

export default Header;
