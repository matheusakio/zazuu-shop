import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  gap: 6px;
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: 800;
`;

export const RightActions = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const IconButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: ${({ theme }) => theme.colors.surface};
  align-items: center;
  justify-content: center;
`;
