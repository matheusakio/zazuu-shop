import { useMutation } from "@tanstack/react-query";
import { authService } from "../../services/api/auth/auth-service";

export function useSignUp() {
  const mutation = useMutation({
    mutationFn: authService.signUp,
  });

  return {
    signUp: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
