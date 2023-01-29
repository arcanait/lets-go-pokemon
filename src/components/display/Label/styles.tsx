import styled from "styled-components";
import {
  FONT_FAMILY,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "./constants/stylesByInput";
import { fontFamilyType, fontSizesType, fontWeightsType } from "./model";

interface LabelWrapperProps {
  family: string;
  size: string;
  weight: string;
  colorLabel: string;
}

export const LabelWrapper = styled.span<LabelWrapperProps>`
  font-family: ${({ family }) => FONT_FAMILY[family as keyof fontFamilyType]};
  font-size: ${({ size }) => `${FONT_SIZES[size as keyof fontSizesType]}px`};
  font-weight: ${({ weight }) => FONT_WEIGHTS[weight as keyof fontWeightsType]};
  color: ${({ theme, colorLabel }) => theme[colorLabel]};
  margin: 0%;
  -webkit-text-stroke: ${({ family }) =>
    family === "pokemon" ? "1px black" : ""};
`;
