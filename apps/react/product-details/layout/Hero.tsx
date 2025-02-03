import React from "react";
import {
  Div,
  Section,
  HeroText,
  Heading,
  Paragraph,
  Button,
  Img,
  FeaturesContainer,
  Feature,
  HeadingInfo,
} from "./Hero.styles";
const Hero: React.FC = () => {
  return (
    <>
      <Div>
        <Section>
          <HeroText>
            <Heading>The World's Leading WordPress Page Builder</Heading>
            <Paragraph>
              Join 5,000,000+ Professionals Who Build Better Sites With
              Elementor
            </Paragraph>
            <Button>Get started</Button>
          </HeroText>
          <Img
            src="https://placehold.co/1200x600/png"
            alt="Home Office Company"
          />
          <FeaturesContainer>
            <Feature>
              <HeadingInfo>All-in-One Solution</HeadingInfo>
              <Paragraph>
                Control every aspect of your web design workflow from one place.
              </Paragraph>
            </Feature>
            <Feature>
              <HeadingInfo>Visual Design</HeadingInfo>
              <Paragraph>
                Simple. Powerful. Flexable. Experience the power of 100% Visual
                design.
              </Paragraph>
            </Feature>
            <Feature>
              <HeadingInfo>Faster Performance</HeadingInfo>
              <Paragraph>
                Build websites that load faster, and speed up the process of
                building them.
              </Paragraph>
            </Feature>
          </FeaturesContainer>
        </Section>
      </Div>
    </>
  );
};

export default Hero;
