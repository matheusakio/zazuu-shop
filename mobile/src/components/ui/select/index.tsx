import { Picker } from "@react-native-picker/picker";
import * as S from "./styles";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  options: Option[];
  onValueChange: (value: string) => void;
};

export function Select({
  label,
  value,
  options,
  onValueChange,
  placeholder = "Selecione",
}: Props) {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>

      <S.Field>
        <Picker selectedValue={value} onValueChange={onValueChange}>
          <Picker.Item label={placeholder} value="" />
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </S.Field>
    </S.Wrapper>
  );
}
