import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../../services/api/products/products-service";

export function useUpdateProduct(productId: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (params: {
      name: string;
      description: string;
      price: number;
      imageUrl?: string;
      category: string;
      stock: number;
    }) => productsService.updateProduct(productId, params),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
      await queryClient.invalidateQueries({
        queryKey: ["product-details", productId],
      });
    },
  });

  return {
    updateProduct: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
