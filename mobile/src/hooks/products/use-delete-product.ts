import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../../services/api/products/products-service";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productsService.deleteProduct,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    deleteProduct: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
