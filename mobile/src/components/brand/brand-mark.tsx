import styled from "styled-components/native";

const Wrapper = styled.View<{ center?: boolean }>`
  align-self: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const Primary = styled.Text`
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -1px;
  color: #95b1a7;
`;

const Accent = styled.Text`
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -1px;
  color: #cdd345;
`;

const Line = styled.View`
  width: 126px;
  height: 5px;
  border-radius: 999px;
  background-color: #95b1a7;
  margin-top: 3px;
`;

const Subtitle = styled.Text`
  margin-top: 3px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #cdd345;
`;

type Props = {
  center?: boolean;
  small?: boolean;
};

export function BrandMark({ center = false, small = false }: Props) {
  return (
    <Wrapper center={center}>
      <Row>
        <Primary style={{ fontSize: small ? 22 : 28 }}>za</Primary>
        <Accent style={{ fontSize: small ? 22 : 28 }}>zuu</Accent>
        <Primary style={{ fontSize: small ? 22 : 28 }}> shop</Primary>
      </Row>
      <Line style={{ width: small ? 120 : 150, height: small ? 4 : 5 }} />
      <Subtitle>BEM-ESTAR PET</Subtitle>
    </Wrapper>
  );
}
