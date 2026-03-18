import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 16px;
`;

export const HeroCard = styled.View`
  margin-bottom: 20px;
  border-radius: 28px;
  overflow: hidden;
`;

export const HeroEyebrow = styled.Text`
  color: #eef6f2;
  font-size: 14px;
  margin-bottom: 6px;
`;

export const HeroTitle = styled.Text`
  color: #ffffff;
  font-size: 26px;
  line-height: 32px;
  font-weight: 900;
  margin-bottom: 8px;
`;

export const HeroNote = styled.Text`
  color: #d4da5c;
  font-size: 14px;
  font-weight: 700;
`;

export const SearchWrapper = styled.View`
  margin-bottom: 16px;
`;

export const ChipsRow = styled.ScrollView`
  margin-bottom: 18px;
  max-height: 52px;
  margin-top: 12px;
`;

export const ChipsContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding-right: 12px;
`;
