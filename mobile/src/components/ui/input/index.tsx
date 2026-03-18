import { TextInputProps } from "react-native";
import * as S from "./styles";

type Props = Omit<TextInputProps, "placeholderTextColor"> & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Field {...rest} />
    </S.Wrapper>
  );
}
