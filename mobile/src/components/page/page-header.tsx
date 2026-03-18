import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import { BrandMark } from "../brand/brand-mark";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LeftButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.82);
  align-items: center;
  justify-content: center;
`;

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RightButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.82);
  align-items: center;
  justify-content: center;
`;

export function PageHeader() {
  const theme = useTheme();

  return (
    <Container>
      <LeftButton activeOpacity={0.85}>
        <Ionicons name="menu-outline" size={22} color="#a4b899" />
      </LeftButton>

      <Center>
        <BrandMark center small />
      </Center>

      <RightButton activeOpacity={0.85}>
        <Ionicons name="notifications-outline" size={20} color="#a4b899" />
      </RightButton>
    </Container>
  );
}
