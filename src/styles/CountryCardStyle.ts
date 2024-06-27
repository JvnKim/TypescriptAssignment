import styled from "styled-components";

export const CardContainer = styled.div<{ isSelected: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#e0f7fa" : "white")};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CountryName = styled.h3`
  margin-bottom: 8px;
`;

export const FlagImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 4px;
  margin-top: 8px;
`;
