import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 8px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 28px;
`;

export const Form = styled.View`
  gap: 18px;
`;

export const Link = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 16px;
  font-weight: 700;
`;
