import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type Props = {
  onPress: () => void;
};

export function Fab({ onPress }: Props) {
  const theme = useTheme();

  return (
    <S.Container onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={["#7FA494", "#66887B", "#4F6F62"]}
        locations={[0, 0.55, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 999,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </LinearGradient>
    </S.Container>
  );
}
