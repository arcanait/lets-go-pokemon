import styled from "styled-components";

export const InputSearchWrapper = styled.div`
  background-color: ${({ theme }) => theme.grey};
  height: 24px;
  border-radius: 8px;
  padding: 2px 8px;
  display: flex;
  gap: 4px;
  svg {
    path {
      color: ${({ theme }) => theme.reallyGrey};
      fill: ${({ theme }) => theme.reallyGrey};
    }
  }
  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    padding: 2px 8px;
    &::placeholder {
      font: 400 12px Montserrat;
    }
  }
`;
