import { LinearGradient } from "expo-linear-gradient";
import * as S from "./styles";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ title, onPress, disabled }: Props) {
  return (
    <S.Container onPress={onPress} disabled={disabled} activeOpacity={0.9}>
      <S.GradientWrapper>
        <LinearGradient
          colors={
            disabled
              ? ["#A9B9B2", "#98A8A1"]
              : ["#7FA494", "#5F8578", "#4F6F62"]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <S.Label>{title}</S.Label>
        </LinearGradient>
      </S.GradientWrapper>
    </S.Container>
  );
}
