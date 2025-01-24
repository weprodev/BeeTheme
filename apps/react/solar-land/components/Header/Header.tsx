import { useState } from "react";
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
  StyleHeader,
  Ul,
} from "./Header.styles";

const Header: React.FC = () => {  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <StyleHeader>
      <Logo>
        <Img src={solarlandLogo} alt="SolarLand Logo" />
      </Logo>

      <Hamburger
        aria-label="Toggle navigation"
        onClick={toggleHamburger}
        className={`${isActive ? "active" : ""}`}
      >
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </Hamburger>

      <Navigation className={`${isActive ? "active" : ""}`}>
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

      <ActionButtons className={`${isActive ? "active" : ""}`}>
        <Login>Login</Login>
        <GetInTouch>Get in Touch</GetInTouch>
      </ActionButtons>
    </StyleHeader>
  );
};

export default Header;
