import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { borderRadius, spaces } from "../../shared/styleVariables";
import styled from "styled-components";

const StyledFeatureTag = styled.span`
  display: flex;
  align-items: center;
  border: 0.1rem solid var(--color-eleventh);
  gap: ${spaces[3]};
  padding: ${spaces[2]} ${spaces[4]};
  border-radius: ${borderRadius.full};
`;
const Circle = styled.span<{ variation: "primary" | "secondary" }>`
  background-image: ${(props) =>
    props.variation === "primary"
      ? "var(--gradient-fourth )"
      : "var(--gradient-tertiary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: ${borderRadius.full};
`;

const FeatureTag: React.FC<{
  children: string;
  variation: "primary" | "secondary";
}> = ({ children, variation = "primary" }) => {
  return (
    <StyledFeatureTag>
      <Circle variation={variation}>
        <FontAwesomeIcon
          icon={faCheck}
          size="2xs"
          color={variation === "primary" ? "black" : "white"}
        />
      </Circle>
      {children}
    </StyledFeatureTag>
  );
};

export default FeatureTag;
