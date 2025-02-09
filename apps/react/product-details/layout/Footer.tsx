import React from "react";
import {
  Section,
  Container,
  Info,
  Item,
  Headline,
  Paragraph,
  Location,
  EmailAddress,
  Form,
  Input,
  Button,
  Border,
  ItemFooter,
  Logo,
  CopyInfo,
} from "./footer.styles";
import LogoIcone from "../images/favicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <Info>
            <Item>
              <Headline>WeProDev</Headline>
              <Paragraph>Lorem, ipsum dolor sit amet consectetur</Paragraph>
              <Paragraph>adipisicing elit.</Paragraph>
            </Item>
            <Item>
              <Headline>Contact Info</Headline>
              <Item>
                <Location>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    color="var(--color-white)"
                  />
                  DadkhahMall,Enghelab,Street
                </Location>
              </Item>
              <Item>
                <EmailAddress>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    color="var(--color-white)"
                  />
                  Youremail@yourdomain.com
                </EmailAddress>
              </Item>
            </Item>
            <Item>
              <Headline>Follow Us</Headline>
              <Paragraph>Subscribe to our newsletter</Paragraph>
              <Form action="#">
                <Input type="email" placeholder="Entere Your Email" />
                <Button>submit</Button>
              </Form>
            </Item>
          </Info>
        </Container>
        <Border></Border>
        <Container>
          <ItemFooter>
            <Logo alt="logo" src={LogoIcone} />
            <CopyInfo> &copy;2024 All rights reserved</CopyInfo>
          </ItemFooter>
        </Container>
      </Section>
    </>
  );
};

export default Footer;
