import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../services/api/products/products-service";

export function useProductCategories() {
  const query = useQuery({
    queryKey: ["product-categories"],
    queryFn: productsService.getCategories,
  });

  return {
    categories: query.data ?? [],
    isLoading: query.isLoading,
  };
}
