import React from "react";
import {
  Actions,
  ArrowICON,
  ArrowIcon,
  GetInTouch,
  HeroContent,
  HeroStyle,
  Img,
  OurServices,
  RecentProject,
  RecentProjectButton,
  RecentProjectCaption,
  RecentProjectItem,
  RecentProjectOptions,
  RecentProjectOptionsButton,
  Statistics,
  StatItem,
  StatLabel,
  StatValue,
  Tagline,
  Title,
} from "./Hero.Style";
import ImgSrc from "../../../images/main-hero.jpg";

interface SvgPathProps {
  xmlns?: string;
  d: string;
  isUppercase?: boolean;
}

const SvgPath: React.FC<SvgPathProps> = ({
  d,
  xmlns = "http://www.w3.org/2000/svg",
  isUppercase = true,
}) => {
  const IconComponent = isUppercase ? ArrowICON : ArrowIcon;

  return (
    <IconComponent
      xmlns={xmlns}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </IconComponent>
  );
};

const Hero: React.FC = () => {
  return (
    <HeroStyle className="container">
      <HeroContent>
        <Tagline>#1 Energy provider in the world</Tagline>
        <Title>New Energy for the Future</Title>

        <Actions>
          <GetInTouch>
            Get in Touch
            <SvgPath
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              isUppercase={true}
            />
          </GetInTouch>

          <OurServices>
            Our Services
            <SvgPath
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              isUppercase={true}
            />
          </OurServices>
        </Actions>
      </HeroContent>

      <RecentProject>
        <RecentProjectItem>
          <Img src={ImgSrc} alt="Recent Project" />

          <RecentProjectOptions>
            <RecentProjectOptionsButton>
              <SvgPath
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                isUppercase={false}
              />
            </RecentProjectOptionsButton>
          </RecentProjectOptions>
          <RecentProjectButton>
            <SvgPath
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              isUppercase={false}
            />
          </RecentProjectButton>

          <RecentProjectCaption>
            Discover Our Recent Project
          </RecentProjectCaption>
        </RecentProjectItem>
      </RecentProject>

      <Statistics>
        <StatItem>
          <StatValue>6 mil</StatValue>
          <StatLabel>The company’s annual net income</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>315</StatValue>
          <StatLabel>Projects completed worldwide</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>120k</StatValue>
          <StatLabel>Employees work in all parts of the world</StatLabel>
        </StatItem>
      </Statistics>
    </HeroStyle>
  );
};

export default Hero;
