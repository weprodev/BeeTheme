import Heading from "../components/Heading";
import {
  Gallery,
  GalleryBox,
  GalleryBoxImg,
  StyledBenefits,
} from "./Benefits.styles";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const Benefits: React.FC = () => {
  return (
    <StyledBenefits>
      <Heading as="h3" variation="secondary">
        More Useful Ecommerce Features
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur fugit doloremque
      </Paragraph>

      <Gallery>
        <GalleryBox>
          <GalleryBoxImg
            src="https://placehold.co/300x300/png"
            alt="Placeholder Image"
          />
          <Heading as="h5">Consectetur adipisicing </Heading>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            dicta Nihil
          </Paragraph>
        </GalleryBox>

        <GalleryBox>
          <GalleryBoxImg
            src="https://placehold.co/300x300/png"
            alt="Placeholder Image"
          />
          <Heading as="h5">Praesentium rem</Heading>
          <Paragraph>
            Blanditiis eos possimus incidunt provident assumenda ut beatae!
            Obcaecati natus quas commodi
          </Paragraph>
        </GalleryBox>

        <GalleryBox>
          <GalleryBoxImg
            src="https://placehold.co/300x300/png"
            alt="Placeholder Image"
          />
          <Heading as="h5">Ducimus officia perferendi</Heading>
          <Paragraph>Nulla iure exercitationem rerum dolor sit amet</Paragraph>
        </GalleryBox>

        <GalleryBox>
          <GalleryBoxImg
            src="https://placehold.co/300x300/png"
            alt="Placeholder Image"
          />
          <Heading as="h5">Debitis velit fugiat elit</Heading>
          <Paragraph>
            Tempora adipisci ipsa doloribus accusamus soluta, dignissimos
            mollitia eius
          </Paragraph>
        </GalleryBox>

        <GalleryBox>
          <GalleryBoxImg
            src="https://placehold.co/300x300/png"
            alt="Placeholder Image"
          />
          <Heading as="h5">European product</Heading>
          <Paragraph>
            Lorem ipsum consectetur adipisicing elit. Impedit, tempora adipisci.
          </Paragraph>
        </GalleryBox>
      </Gallery>

      <Button>Veiw all</Button>
    </StyledBenefits>
  );
};

export default Benefits;
