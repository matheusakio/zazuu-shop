import styled from "styled-components/native";
import { Image } from "expo-image";

export const Wrapper = styled.View`
  gap: 8px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 700;
`;

export const PickCard = styled.TouchableOpacity`
  width: 100%;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.92);
  border-width: 1.5px;
  border-color: #a4b899;
`;

export const Preview = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const PlaceholderBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const IconCircle = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: rgba(205, 211, 69, 0.16);
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const PlaceholderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const PlaceholderText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  text-align: center;
  line-height: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
  height: 48px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.92);
  border-width: 1px;
  border-color: #a4b899;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 700;
`;
