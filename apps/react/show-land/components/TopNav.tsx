import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  StyledTopNav,
  Logo,
  CloseButton,
  NavLink,
  NavLinks,
  ToggleNavButton,
} from "./TopNav.styles";
import Button from "./Button";

const TopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledTopNav>
      <Logo>WeProDev</Logo>

      <NavLinks isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon
            icon={faClose}
            size="3x"
            color="var(--color-grey-dark-3)"
          ></FontAwesomeIcon>
        </CloseButton>

        <NavLink to="">Demos</NavLink>
        <NavLink to="">Mobile view</NavLink>
        <NavLink to="">Features</NavLink>
        <NavLink to="">Help & Support</NavLink>
        <Button>Purchase now</Button>
      </NavLinks>

      <ToggleNavButton onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon
          icon={faBars}
          size="3x"
          color="var(--color-grey-dark-3)"
        />
      </ToggleNavButton>
    </StyledTopNav>
  );
};

export default TopNav;
