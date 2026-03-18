import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type Props = {
  greeting: string;
  title: string;
};

export function Header({ greeting, title }: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.TopRow>
        <S.Greeting>{greeting}</S.Greeting>

        <S.RightActions>
          <S.IconButton activeOpacity={0.85}>
            <Ionicons
              name="notifications-outline"
              size={20}
              color={theme.colors.primaryDark}
            />
          </S.IconButton>

          <S.IconButton activeOpacity={0.85}>
            <Ionicons
              name="paw-outline"
              size={20}
              color={theme.colors.primaryDark}
            />
          </S.IconButton>
        </S.RightActions>
      </S.TopRow>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
