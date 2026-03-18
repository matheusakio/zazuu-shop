import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  margin-top: 10px;
  margin-bottom: 16px;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  border-width: 1.5px;
  border-color: #a4b899;
`;

export const Title = styled.Text`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 900;
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  line-height: 24px;
  font-size: 15px;
`;
