import styled from "styled-components/native";

export const Wrapper = styled.View`
  gap: 6px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 700;
`;

export const Field = styled.View`
  height: 48px;
  border-width: 1.5px;
  border-color: #a4b899;
  background-color: rgba(255, 255, 255, 0.96);
  border-radius: 16px;
  justify-content: center;
  overflow: hidden;
`;
