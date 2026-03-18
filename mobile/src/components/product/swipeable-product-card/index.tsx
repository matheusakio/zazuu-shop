import { Alert } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { ProductCard } from "../product-card";
import * as S from "./styles";

type Props = {
  canDelete?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string | null;
};

export function SwipeableProductCard({ canDelete, onDelete, ...rest }: Props) {
  function handleDelete() {
    Alert.alert(
      "Excluir produto",
      "Tem certeza que deseja excluir este produto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: onDelete,
        },
      ],
    );
  }

  if (!canDelete) {
    return <ProductCard {...rest} />;
  }

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <S.DeleteAction onPress={handleDelete} activeOpacity={0.85}>
          <Ionicons name="trash-outline" size={22} color="#FFFFFF" />
        </S.DeleteAction>
      )}
    >
      <ProductCard {...rest} />
    </Swipeable>
  );
}
