import { useState } from "react";
import solarlandLogo from "../../images/solarland-logo.png";

import {
  A,
  ActionButtons,
  GetInTouch,
  Hamburger,
  Img,
  Login,
  Navigation,
  Span,
  StyleHeader,
  Ul,
} from "./Header.styles";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <StyleHeader>
      <div>
        <Img src={solarlandLogo} alt="SolarLand Logo" />
      </div>

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
          <li>
            <A href="#home">Home</A>
          </li>
          <li>
            <A href="#about">About Us</A>
          </li>
          <li>
            <A href="#features">Features</A>
          </li>
          <li>
            <A href="#services">Services</A>
          </li>
          <li>
            <A href="#contact">Contact</A>
          </li>
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
