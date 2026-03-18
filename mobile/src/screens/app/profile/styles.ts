import styled from "styled-components/native";

export const Container = styled.View`
  gap: 18px;
  flex: 1;
  margin-top: 10px;
`;
export const Button = styled.View`
  margin-bottom: 32px;
`;

export const HeroCard = styled.View`
  border-radius: 28px;
  overflow: hidden;
`;

export const UserCard = styled.View`
  background-color: rgba(255, 255, 255, 0.94);
  padding: 24px;
  border-width: 1.5px;
  border-color: #a4b899;
  border-radius: 16px;
  gap: 18px;
`;

export const Avatar = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: #d4da5c;
  align-items: center;
  justify-content: center;
`;

export const AvatarText = styled.Text`
  color: #2a3631;
  font-size: 28px;
  font-weight: 900;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 900;
`;

export const Email = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
`;

export const Section = styled.View`
  gap: 4px;
`;

export const SectionName = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  font-weight: 700;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 800;
`;
