import { api } from "../../api";
import { AuthResponse, SignInParams, SignUpParams, UserMe } from "./auth-types";

async function signIn(params: SignInParams): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", params);
  return data;
}

async function signUp(params: SignUpParams): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/register", params);
  return data;
}

async function userMe(): Promise<UserMe> {
  const { data } = await api.get<UserMe>("/auth/me");
  return data;
}

export const authApi = {
  signIn,
  signUp,
  userMe,
};
