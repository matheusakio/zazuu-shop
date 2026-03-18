import { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Loading } from "../../../components/ui/loading";
import { Select } from "../../../components/ui/select";
import { ImagePickerField } from "../../../components/ui/image-picker-field";
import { useUpdateProduct } from "../../../hooks/products/use-update-product";
import { useProductDetails } from "../../../hooks/products/use-product-details";
import { useProductCategories } from "../../../hooks/products/use-product-categories";
import { RootAppStackParamList } from "../../../types/navigation";
import {
  formatCurrencyInput,
  onlyNumbers,
  parseCurrencyInput,
} from "../../../utils/formatters";
import { showError, showSuccess } from "../../../utils/toast";
import * as S from "./styles";
import { Page } from "../../../components/page";

type EditProductRouteProp = RouteProp<RootAppStackParamList, "EditProduct">;

export function EditProductScreen() {
  const route = useRoute<EditProductRouteProp>();
  const { productId } = route.params;

  const { product, isLoading } = useProductDetails(productId);
  const { updateProduct, isLoading: isUpdating } = useUpdateProduct(productId);
  const { categories, isLoading: isLoadingCategories } = useProductCategories();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(
        Number(product.price).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      );
      setImageUrl(product.imageUrl || "");
      setCategory(product.category);
      setStock(String(product.stock));
    }
  }, [product]);

  async function handleUpdate() {
    try {
      await updateProduct({
        name,
        description,
        price: parseCurrencyInput(price),
        imageUrl,
        category,
        stock: Number(stock),
      });

      showSuccess("Produto atualizado com sucesso");
    } catch {
      showError("Não foi possível atualizar o produto");
    }
  }

  if (isLoading) {
    return (
      <Page title="Editar produto">
        <Loading label="Carregando produto..." />
      </Page>
    );
  }

  return (
    <Page scroll title="Editar produto" back>
      <S.Container>
        <S.Content>
          <S.Subtitle>Atualize as informações do produto.</S.Subtitle>

          <ImagePickerField
            label="Foto do produto"
            value={imageUrl}
            onChange={setImageUrl}
          />

          <Input
            label="Nome"
            placeholder="Ex: Ração Premium"
            value={name}
            onChangeText={setName}
          />

          <Input
            label="Descrição"
            placeholder="Descreva o produto"
            value={description}
            onChangeText={setDescription}
            multiline
            style={{ height: 96, textAlignVertical: "top", paddingTop: 14 }}
          />

          <Input
            label="Preço"
            placeholder="0,00"
            value={price}
            onChangeText={(text) => setPrice(formatCurrencyInput(text))}
            keyboardType="number-pad"
          />

          <Select
            label="Categoria"
            value={category}
            placeholder={
              isLoadingCategories
                ? "Carregando categorias..."
                : "Selecione a categoria"
            }
            options={categories}
            onValueChange={setCategory}
          />

          <Input
            label="Estoque"
            placeholder="0"
            value={stock}
            onChangeText={(text) => setStock(onlyNumbers(text))}
            keyboardType="number-pad"
          />

          <Button
            title={isUpdating ? "Salvando..." : "Salvar alterações"}
            onPress={handleUpdate}
            disabled={isUpdating}
          />
        </S.Content>
      </S.Container>
    </Page>
  );
}
