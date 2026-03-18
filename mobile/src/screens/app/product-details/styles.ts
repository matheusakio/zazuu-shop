import styled from "styled-components/native";
import { Image } from "expo-image";

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 280px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  background-color: ${({ theme }) => theme.colors.backgroundSoft};
`;
export const Link = styled.Text`
  margin-top: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 16px;
  font-weight: 700;
`;

export const Content = styled.View`
  gap: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.xxl}px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: 800;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 22px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: 800;
`;

export const MetaCard = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: 8px;
`;

export const MetaText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
