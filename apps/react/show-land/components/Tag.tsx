import { borderRadius, fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import styled from "styled-components";


const Tag = styled.span`
    text-transform: uppercase;
    background-image: var(--gradient-primary);
    font-weight: ${fontWeights.bold};
    border-radius: ${borderRadius.full};
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: ${spaces[1]} ${spaces[5]};
    gap: ${spaces[2]};
    font-size: ${fontSizes.sm};
`;

export default Tag;