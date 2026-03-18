import { useState } from "react";
import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "../../../components/ui/input";
import { Chip } from "../../../components/ui/chip";
import { Fab } from "../../../components/ui/fab";
import { Loading } from "../../../components/ui/loading";
import { EmptyState } from "../../../components/ui/empty-state";
import { SwipeableProductCard } from "../../../components/product/swipeable-product-card";
import { useAuthStore } from "../../../store/auth-store";
import { useProducts } from "../../../hooks/products/use-products";
import { useDeleteProduct } from "../../../hooks/products/use-delete-product";
import * as S from "./styles";
import { Page } from "../../../components/page";
import { PageHeader } from "../../../components/page/page-header";

const categories = [
  "Todos",
  "Ração",
  "Higiene",
  "Brinquedos",
  "Acessórios",
  "Medicamentos",
];

export function HomeScreen({ navigation }: any) {
  const user = useAuthStore((state) => state.user);
  const { deleteProduct } = useDeleteProduct();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [removedIds, setRemovedIds] = useState<string[]>([]);

  const categoryFilter =
    selectedCategory === "Todos" ? undefined : selectedCategory;

  const { products, isLoading, refetch, isRefetching } = useProducts({
    search,
    category: categoryFilter,
  });

  const visibleProducts = products.filter(
    (item) => !removedIds.includes(item.id),
  );

  async function handleDelete(productId: string) {
    setRemovedIds((prev) => [...prev, productId]);

    setTimeout(async () => {
      await deleteProduct(productId);
      setRemovedIds((prev) => prev.filter((id) => id !== productId));
    }, 300);
  }

  return (
    <>
      <Page scroll>
        <S.Container>
          <PageHeader />

          <S.Greeting>Olá, {user?.username ?? "usuário"}</S.Greeting>
          <S.Title>Seu catálogo pet</S.Title>

          <S.HeroCard>
            <LinearGradient
              colors={["#7FA494", "#66887B", "#4F6F62"]}
              locations={[0, 0.55, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderRadius: 16,
                padding: 26,
              }}
            >
              <S.HeroEyebrow>Catálogo premium</S.HeroEyebrow>
              <S.HeroTitle>Organize seus produtos com mais estilo</S.HeroTitle>
              <S.HeroNote>simples • moderno • elegante</S.HeroNote>
            </LinearGradient>
          </S.HeroCard>

          <S.SearchWrapper>
            <Input
              label="Buscar produtos"
              placeholder="Digite nome ou descrição"
              value={search}
              onChangeText={setSearch}
            />
          </S.SearchWrapper>

          <S.ChipsRow horizontal showsHorizontalScrollIndicator={false}>
            <S.ChipsContent>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  active={selectedCategory === category}
                  onPress={() => setSelectedCategory(category)}
                />
              ))}
            </S.ChipsContent>
          </S.ChipsRow>

          {isLoading ? (
            <Loading label="Buscando produtos..." />
          ) : visibleProducts.length === 0 ? (
            <EmptyState
              title="Nenhum produto encontrado"
              description="Tente ajustar os filtros ou cadastre um novo produto para começar."
            />
          ) : (
            <FlatList
              data={visibleProducts}
              keyExtractor={(item) => item.id}
              onRefresh={refetch}
              style={{ marginTop: 10 }}
              refreshing={isRefetching}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <SwipeableProductCard
                  {...item}
                  canDelete={item.ownerId === user?.id}
                  onPress={() =>
                    navigation.navigate("ProductDetails", {
                      productId: item.id,
                    })
                  }
                  onDelete={() => handleDelete(item.id)}
                />
              )}
            />
          )}
        </S.Container>
      </Page>

      <Fab onPress={() => navigation.navigate("CreateProductTab")} />
    </>
  );
}
