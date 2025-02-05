import React from "react";
import {
  Section,
  Heading,
  Container,
  Card,
  Img,
  CardHeading,
  CardParagraph,
  Link,
} from "./Resources.styles";
const Resources: React.FC = () => {
  return (
    <>
      <Section>
        <Heading>Explore More Resources</Heading>
        <Container>
          <Card>
            <Img src="https://placehold.co/80x80/png" alt="Gray Legos" />
            <CardHeading>Add-ons</CardHeading>
            <CardParagraph>
              Take advantage of the many add-ons that add functionality to
              Elementor
            </CardParagraph>
            <Link href="#">Learn More</Link>
          </Card>
          <Card>
            <Img src="https://placehold.co/80x80/png" alt="Gray Legos" />
            <CardHeading>Hosting</CardHeading>
            <CardParagraph>
              Get the most reliable hosting packages, highly compatible with
              Elementor
            </CardParagraph>
            <Link href="#">Learn More</Link>
          </Card>
          <Card>
            <Img src="https://placehold.co/80x80/png" alt="Gray Legos" />
            <CardHeading>Education</CardHeading>
            <CardParagraph>
              Follow our in-depth tutorials and become an Elementor expert​
            </CardParagraph>
            <Link href="#">Learn More</Link>
          </Card>
          <Card>
            <Img src="https://placehold.co/80x80/png" alt="Gray Legos" />
            <CardHeading>Community</CardHeading>
            <CardParagraph>
              Join our worldwide community, and get advice from other members​
            </CardParagraph>
            <Link href="#">Learn More</Link>
          </Card>
        </Container>
      </Section>
    </>
  );
};

export default Resources;
