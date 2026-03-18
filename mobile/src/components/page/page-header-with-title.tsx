import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 56px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

const Side = styled.View`
  width: 40px;
  align-items: flex-start;
  justify-content: center;
`;

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.82);
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 800;
`;

type Props = {
  title: string;
  back?: boolean;
};

export function PageHeaderWithTitle({ title, back = true }: Props) {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <Side>
        {back ? (
          <BackButton onPress={navigation.goBack} activeOpacity={0.85}>
            <Ionicons
              name="arrow-back"
              size={18}
              color={theme.colors.primaryDark}
            />
          </BackButton>
        ) : null}
      </Side>

      <Center>
        <Title numberOfLines={1}>{title}</Title>
      </Center>

      <Side />
    </Container>
  );
}
