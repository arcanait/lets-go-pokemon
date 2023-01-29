import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../constants/routes";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`;
