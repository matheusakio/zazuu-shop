import { authApi } from "./auth-api";
import { AuthResponse, SignInParams, SignUpParams, UserMe } from "./auth-types";

async function signIn(params: SignInParams): Promise<AuthResponse> {
  return authApi.signIn(params);
}

async function signUp(params: SignUpParams): Promise<AuthResponse> {
  return authApi.signUp(params);
}

async function userMe(): Promise<UserMe> {
  return authApi.userMe();
}

export const authService = {
  signIn,
  signUp,
  userMe,
};
