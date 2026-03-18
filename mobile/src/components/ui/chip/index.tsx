import { LinearGradient } from "expo-linear-gradient";
import * as S from "./styles";

type Props = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export function Chip({ label, active, onPress }: Props) {
  if (active) {
    return (
      <S.Container onPress={onPress} activeOpacity={0.9}>
        <LinearGradient
          colors={["#7FA494", "#66887B", "#4F6F62"]}
          locations={[0, 0.55, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            height: 44,
            paddingHorizontal: 16,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <S.Label active>{label}</S.Label>
        </LinearGradient>
      </S.Container>
    );
  }

  return (
    <S.Container onPress={onPress} activeOpacity={0.9}>
      <S.Outline>
        <S.Label>{label}</S.Label>
      </S.Outline>
    </S.Container>
  );
}
