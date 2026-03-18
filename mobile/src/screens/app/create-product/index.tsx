import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Select } from "../../../components/ui/select";
import { ImagePickerField } from "../../../components/ui/image-picker-field";
import { useCreateProduct } from "../../../hooks/products/use-create-product";
import { useProductCategories } from "../../../hooks/products/use-product-categories";
import {
  formatCurrencyInput,
  onlyNumbers,
  parseCurrencyInput,
} from "../../../utils/formatters";
import { showError, showSuccess } from "../../../utils/toast";
import * as S from "./styles";
import { Page } from "../../../components/page";

export function CreateProductScreen() {
  const { createProduct, isLoading } = useCreateProduct();
  const { categories, isLoading: isLoadingCategories } = useProductCategories();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  async function handleCreate() {
    if (!name || !description || !price || !category || !stock) {
      showError("Preencha todos os campos obrigatórios");
      return;
    }

    try {
      await createProduct({
        name,
        description,
        price: parseCurrencyInput(price),
        imageUrl,
        category,
        stock: Number(stock),
      });

      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setCategory("");
      setStock("");

      showSuccess("Produto criado com sucesso");
    } catch {
      showError("Não foi possível criar o produto");
    }
  }

  return (
    <Page scroll title="Novo produto" back={false}>
      <S.Container>
        <S.Content>
          <S.Subtitle>
            Adicione produtos com imagem, categoria, preço e estoque.
          </S.Subtitle>

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
            title={isLoading ? "Criando..." : "Criar produto"}
            onPress={handleCreate}
            disabled={isLoading}
          />
        </S.Content>
      </S.Container>
    </Page>
  );
}
