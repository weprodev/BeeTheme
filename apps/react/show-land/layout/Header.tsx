import TopNav from "../components/TopNav";
import { Hero, HeroHeading, HeroText, ImgGallery, MiniGallery, StyledHeader, Tag } from "./Header.styles";
import Button from "../components/Button";

const Header: React.FC = () => {
  return (
    <StyledHeader as="header">
      <TopNav />
      <Hero>
        <HeroText>
          <Tag>ultimate wordpress solurton</Tag>
          <HeroHeading as="h1">Top-Notch Beautiful Design</HeroHeading>
          <Button>Go to your store</Button>
        </HeroText>
        <MiniGallery>
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
          <ImgGallery
            src="https://placehold.co/600x400/png"
            alt="Placeholder Image"
          />
        </MiniGallery>
      </Hero>
    </StyledHeader>
  );
};

export default Header;
