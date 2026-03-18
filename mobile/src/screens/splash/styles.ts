import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const BrandWrapper = styled.View`
  align-items: center;
`;

export const BrandRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const BrandPrimary = styled.Text`
  font-size: 58px;
  font-weight: 800;
  letter-spacing: -2px;
  color: #a4b899;
`;

export const BrandAccent = styled.Text`
  font-size: 58px;
  font-weight: 800;
  letter-spacing: -2px;
  color: #cdd345;
`;

export const BrandLine = styled.View`
  width: 280px;
  height: 10px;
  border-radius: 999px;
  background-color: #a4b899;
`;

export const BrandSubtitle = styled.Text`
  margin-top: 4px;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #cdd345;
`;

export const PawBadge = styled.View`
  margin-top: 36px;
  width: 84px;
  height: 84px;
  border-radius: 42px;
  background-color: rgba(198, 212, 60, 0.16);
  align-items: center;
  justify-content: center;
`;

export const PawText = styled.Text`
  margin-top: 32px;
  font-size: 40px;
  color: "#2F4A40";
`;
