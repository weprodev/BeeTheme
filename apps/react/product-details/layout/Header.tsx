import React, { useState } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  StyleHeader,
  TopSection,
  Img,
  Language,
  LanguageTitle,
  IconLanguage,
  IconDown,
  ListInfo,
  ListItems,
  SelectLanguage,
  SearchBox,
  Search,
  IconSearch,
  ButtonsContainer,
  ButtonLogin,
  ButtonFree,
  Navbar,
  Menu,
  MenuItems,
  Link,
} from "./Header.styles";
import WeProdev from "../images/weprodev-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header: React.FC = () => {
  const [IsOpen, SetIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <StyleHeader>
        <TopSection>
          <Img src={WeProdev} alt="WeProdev logo" />
          <Language>
            <LanguageTitle>
              <IconLanguage>
                <FontAwesomeIcon icon={faGlobe} size="lg" />
              </IconLanguage>
              Language
              <IconDown
                onMouseEnter={() => SetIsOpen(true)}
                onMouseDownCapture={() => SetIsOpen(false)}
              >
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </IconDown>
            </LanguageTitle>
            <ListInfo>
              {IsOpen && (
                <ListItems>
                  <SelectLanguage href="#">English</SelectLanguage>
                </ListItems>
              )}

              {IsOpen && (
                <ListItems>
                  <SelectLanguage href="#">Kurdish</SelectLanguage>
                </ListItems>
              )}
              {IsOpen && (
                <ListItems>
                  <SelectLanguage href="#">Persian</SelectLanguage>
                </ListItems>
              )}
            </ListInfo>
          </Language>
          <SearchBox>
            {isFocused && (
              <Search
                type={"text"}
                placeholder="Search..."
                onBlur={() => setIsFocused(false)}
              />
            )}
            <IconSearch onClick={() => setIsFocused(!isFocused)}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                color="var(--color-white) || var(--color-black)"
              />
            </IconSearch>
          </SearchBox>
          <ButtonsContainer>
            <ButtonLogin>Login</ButtonLogin>
            <ButtonFree>Free template</ButtonFree>
          </ButtonsContainer>
        </TopSection>
        <Navbar>
          <Menu>
            <MenuItems>
              <Link href="#">Home</Link>
            </MenuItems>
            <MenuItems>
              <Link href="#">Portfolio</Link>
            </MenuItems>
            <MenuItems>
              <Link href="#">Blog</Link>
            </MenuItems>
            <MenuItems>
              <Link href="#">Contact</Link>
            </MenuItems>
          </Menu>
        </Navbar>
      </StyleHeader>
    </>
  );
};

export default Header;
