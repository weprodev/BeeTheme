import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  NavCloseButton,
  Hero,
  HeroHeading,
  HeroTextContainer,
  MiniGalleryImg,
  Logo,
  MiniGallery,
  NavLink,
  NavLinks,
  StyledHeader,
  HeroTag,
  NavButtonToggle,
  Nav,
} from "./Header.styles";
import Button from "../components/Button";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);
  const openNav = () => setIsNavOpen(true);

  return (
    <StyledHeader as="header">
      <Nav>
        <Logo>WeProDev</Logo>

        <NavLinks isOpen={isNavOpen}>
          <NavCloseButton onClick={closeNav}>
            <FontAwesomeIcon
              icon={faClose}
              size="3x"
              color="var(--color-grey-dark-3)"
            ></FontAwesomeIcon>
          </NavCloseButton>

          <NavLink to="">Demos</NavLink>
          <NavLink to="">Mobile view</NavLink>
          <NavLink to="">Features</NavLink>
          <NavLink to="">Help & Support</NavLink>
          <Button>Purchase now</Button>
        </NavLinks>

        <NavButtonToggle onClick={openNav}>
          <FontAwesomeIcon
            icon={faBars}
            size="3x"
            color="var(--color-grey-dark-3)"
          />
        </NavButtonToggle>
      </Nav>

      <Hero>
        <HeroTextContainer>
          <HeroTag>ultimate wordpress solurton</HeroTag>
          <HeroHeading as="h1">Top-Notch Beautiful Design</HeroHeading>
          <Button>Go to your store</Button>
        </HeroTextContainer>

        <MiniGallery>
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <MiniGalleryImg
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
        </MiniGallery>
      </Hero>
    </StyledHeader>
  );
};

export default Header;
