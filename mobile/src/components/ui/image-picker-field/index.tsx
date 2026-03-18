import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { showError } from "../../../utils/toast";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function ImagePickerField({ label, value, onChange }: Props) {
  async function handlePickImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      showError("Permissão para acessar fotos não concedida");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (result.canceled) return;

    const asset = result.assets[0];
    onChange(asset.uri);
  }

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>

      <S.PickCard onPress={handlePickImage} activeOpacity={0.9}>
        {value ? (
          <S.Preview source={{ uri: value }} contentFit="cover" />
        ) : (
          <S.PlaceholderBox>
            <S.IconCircle>
              <Ionicons name="image-outline" size={24} color="#4F6F62" />
            </S.IconCircle>
            <S.PlaceholderTitle>Selecionar foto do produto</S.PlaceholderTitle>
            <S.PlaceholderText>
              Escolha uma imagem da galeria do celular
            </S.PlaceholderText>
          </S.PlaceholderBox>
        )}
      </S.PickCard>
    </S.Wrapper>
  );
}
