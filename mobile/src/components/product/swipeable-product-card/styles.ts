import styled from "styled-components/native";

export const DeleteAction = styled.TouchableOpacity`
  width: 96px;
  margin-left: 12px;
  margin-bottom: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.danger};
  align-items: center;
  justify-content: center;
`;
