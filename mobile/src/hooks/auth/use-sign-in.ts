import { useMutation } from "@tanstack/react-query";
import { authService } from "../../services/api/auth/auth-service";

export function useSignIn() {
  const mutation = useMutation({
    mutationFn: authService.signIn,
  });

  return {
    signIn: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
