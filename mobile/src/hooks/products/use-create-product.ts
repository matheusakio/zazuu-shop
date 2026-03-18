import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../../services/api/products/products-service";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productsService.createProduct,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    createProduct: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
