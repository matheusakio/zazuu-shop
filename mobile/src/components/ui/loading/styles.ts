import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

export const DotRow = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.Text`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
