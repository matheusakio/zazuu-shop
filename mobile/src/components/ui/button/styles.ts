import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ disabled?: boolean }>`
  height: 46px;
  margin-top: 32px;
  border-radius: 12px;
  overflow: hidden;
  shadow-color: #000;
  shadow-opacity: 0.14;
  shadow-radius: 14px;
  shadow-offset: 0px 4px;
  elevation: 5;
`;

export const GradientWrapper = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;
