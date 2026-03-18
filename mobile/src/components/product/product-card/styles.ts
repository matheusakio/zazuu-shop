import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.backgroundSoft};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: 8px;
`;

export const Category = styled.Text`
  color: #cdd345;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: 800;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: 800;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: 800;
`;

export const Stock = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
