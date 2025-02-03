import React from "react";
import {
  Div,
  Section,
  Heading,
  BuiltFeatures,
  Features,
  FeatureInfo,
  FeatureTopic,
  HeadingTitle,
  Paragraph,
  Link,
  FeatureImg,
  Img,
} from "./Built.styles";
const BuiltForProfessionals: React.FC = () => {
  return (
    <>
      <Div>
        <Section>
          <Heading>Built for Professionals From Freelancer to Agency</Heading>
          <BuiltFeatures>
            <Features>
              <FeatureInfo>
                <FeatureTopic>DESIGN</FeatureTopic>
                <HeadingTitle>Pixel Perfect Design in WordPress</HeadingTitle>
                <Paragraph>
                  The only complete design platform to offer pixel perfect
                  design, yet produces 100% clean code. Take your design vision
                  and turn it into a stunning custom-made website.
                </Paragraph>
                <Link href="#">Learn More</Link>
              </FeatureInfo>
              <FeatureImg>
                <Img src="https://placehold.co/300x400/png" alt="Placeholder" />
              </FeatureImg>
            </Features>
            <Features>
              <FeatureInfo>
                <FeatureTopic>MARKETING</FeatureTopic>
                <HeadingTitle>
                  Get More Traffic, Leads & Conversions
                </HeadingTitle>
                <Paragraph>
                  Design forms visually, integrate them with your favorite
                  marketing tools, and generate more traffic, leads &
                  conversions.
                </Paragraph>
                <Link href="#">Learn More</Link>
              </FeatureInfo>
              <FeatureImg>
                <Img src="https://placehold.co/300x400/png" alt="Placeholder" />
              </FeatureImg>
            </Features>
            <Features>
              <FeatureInfo>
                <FeatureTopic>DEVELOPMENT</FeatureTopic>
                <HeadingTitle>Extendable & Developer-Friendly</HeadingTitle>
                <Paragraph>
                  Thousands of developers have contributed to the Elementor open
                  source project, building themes, add-ons, and products,
                  further extending the functionality.
                </Paragraph>
                <Link href="#">Learn More</Link>
              </FeatureInfo>
              <FeatureImg>
                <Img src="https://placehold.co/300x400/png" alt="Placeholder" />
              </FeatureImg>
            </Features>
          </BuiltFeatures>
        </Section>
      </Div>
    </>
  );
};

export default BuiltForProfessionals;
