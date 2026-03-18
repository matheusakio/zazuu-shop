import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  gap: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.xxl}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-weight: 800;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Preview = styled(Image)`
  width: 100%;
  height: 220px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  background-color: ${({ theme }) => theme.colors.backgroundSoft};
`;

export const SuccessBox = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const SuccessText = styled.Text`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 700;
  text-align: center;
`;
