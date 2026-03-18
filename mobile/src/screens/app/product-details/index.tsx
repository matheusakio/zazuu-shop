import { Alert } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "../../../components/ui/button";
import { Loading } from "../../../components/ui/loading";
import { useDeleteProduct } from "../../../hooks/products/use-delete-product";
import { RootAppStackParamList } from "../../../types/navigation";
import { useAuthStore } from "../../../store/auth-store";
import { useProductDetails } from "../../../hooks/products/use-product-details";
import * as S from "./styles";
import { Page } from "../../../components/page";

type RouteProps = RouteProp<RootAppStackParamList, "ProductDetails">;
type NavigationProps = NativeStackNavigationProp<RootAppStackParamList>;

export function ProductDetailsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();
  const user = useAuthStore((state) => state.user);
  const { deleteProduct, isLoading: isDeleting } = useDeleteProduct();

  const { productId } = route.params;
  const { product, isLoading } = useProductDetails(productId);

  async function handleDelete() {
    Alert.alert(
      "Excluir produto",
      "Tem certeza que deseja excluir este produto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteProduct(productId);
              Alert.alert("Sucesso", "Produto removido com sucesso");
              navigation.goBack();
            } catch {
              Alert.alert("Erro", "Não foi possível remover o produto");
            }
          },
        },
      ],
    );
  }

  if (isLoading || !product) {
    return (
      <Page title="Detalhes">
        <Loading label="Carregando detalhes..." />
      </Page>
    );
  }

  const isOwner = product.ownerId === user?.id;

  return (
    <Page scroll title="Detalhes">
      <S.Scroll showsVerticalScrollIndicator={false}>
        <S.Content>
          <S.HeroImage
            source={{
              uri:
                product.imageUrl ||
                "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
            }}
            contentFit="cover"
          />

          <S.Category>{product.category}</S.Category>
          <S.Title>{product.name}</S.Title>
          <S.Description>{product.description}</S.Description>
          <S.Price>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </S.Price>

          <S.MetaCard>
            <S.MetaText>Estoque: {product.stock}</S.MetaText>
            <S.MetaText>Criado por: {product.owner.username}</S.MetaText>
          </S.MetaCard>

          {isOwner && (
            <>
              <Button
                title="Editar produto"
                onPress={() =>
                  navigation.navigate("EditProduct", { productId })
                }
              />
              <S.Link onPress={handleDelete} disabled={isDeleting}>
                Excluir produto
              </S.Link>
            </>
          )}
        </S.Content>
      </S.Scroll>
    </Page>
  );
}
