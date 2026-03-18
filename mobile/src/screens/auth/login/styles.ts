import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: 12px;
`;

export const BrandMini = styled.View`
  align-self: center;
  margin-bottom: 32px;
`;

export const BrandMiniRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const BrandMiniPrimary = styled.Text`
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -1px;
  color: #a4b899;
`;

export const BrandMiniAccent = styled.Text`
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -1px;
  color: #cdd345;
`;

export const BrandMiniLine = styled.View`
  width: 168px;
  height: 6px;
  border-radius: 999px;
  background-color: #a4b899;
`;

export const BrandMiniSubtitle = styled.Text`
  margin-top: 1px;
  font-size: 12px;
  text-align: center;
  font-weight: 900;
  letter-spacing: 1px;
  color: #cdd345;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin-top: 32px;
  font-weight: 900;
  line-height: 22px;
`;

export const Subtitle = styled.Text`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 22px;
`;

export const Form = styled.View`
  margin-top: 22px;
  gap: 18px;
`;

export const Link = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 16px;
  font-weight: 700;
`;
