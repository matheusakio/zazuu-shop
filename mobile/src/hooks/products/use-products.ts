import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../services/api/products/products-service";

export function useProducts(params: { search?: string; category?: string }) {
  const query = useQuery({
    queryKey: ["products", params.search, params.category],
    queryFn: () => productsService.getProducts(params),
  });

  return {
    products: query.data ?? [],
    isLoading: query.isLoading,
    isRefetching: query.isRefetching,
    refetch: query.refetch,
  };
}
