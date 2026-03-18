import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type Props = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <Ionicons name="search-outline" size={36} color="#a4b899" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
