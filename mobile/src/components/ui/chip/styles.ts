import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 16px;
  overflow: hidden;
`;

export const Outline = styled.View`
  height: 44px;
  padding: 0 16px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.92);
  border-width: 1.5px;
  border-color: #a4b899;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#FFFFFF" : "#2A3631")};
  font-size: 14px;
  font-weight: 800;
`;
