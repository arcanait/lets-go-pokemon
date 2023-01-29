import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/routes";
interface IPokemonCardWrapper {
  backgroundColor: string;
}
export const PokemonCardWrapper = styled.div<IPokemonCardWrapper>`
  background-color: ${({ backgroundColor, theme }) => theme[backgroundColor]};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  .title-name {
    text-align: center;
    margin-bottom: 12px;
  }
  .content-container {
    display: flex;
    .stats-container {
      width: 100%;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
