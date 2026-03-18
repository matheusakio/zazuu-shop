import * as S from "./styles";

type Props = {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string | null;
  onPress?: () => void;
};

export function ProductCard({
  name,
  description,
  price,
  category,
  stock,
  imageUrl,
  onPress,
}: Props) {
  return (
    <S.Container onPress={onPress} activeOpacity={0.9}>
      <S.ProductImage
        source={{
          uri:
            imageUrl ||
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
        }}
        contentFit="cover"
      />

      <S.Content>
        <S.Category>{category}</S.Category>
        <S.Title numberOfLines={1}>{name}</S.Title>
        <S.Description numberOfLines={2}>{description}</S.Description>

        <S.Footer>
          <S.Price>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </S.Price>
          <S.Stock>Estoque: {stock}</S.Stock>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}
