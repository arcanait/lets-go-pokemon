import styled from "styled-components";

interface IBarFillWrapper {
  barColor: string;
  barWidth: number;
}

export const BarFillWrapper = styled.div<IBarFillWrapper>`
  background-color: ${({ theme }) => theme.grey};
  width: 100%;
  position: relative;
  height: 4px;
  border-radius: 8px;
  &::after {
    content: "";
    position: absolute;
    opacity: 1;
    border-radius: 8px;
    left: 0;
    top: 0;
    height: inherit;
    background-color: ${({ barColor, theme }) => theme[barColor]};
    width: ${({ barWidth }) => `${barWidth}%`};
  }
`;
