import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../services/api/products/products-service";

export function useProductDetails(productId: string) {
  const query = useQuery({
    queryKey: ["product-details", productId],
    queryFn: () => productsService.getProductById(productId),
  });

  return {
    product: query.data,
    isLoading: query.isLoading,
  };
}
