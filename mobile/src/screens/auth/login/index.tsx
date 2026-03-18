import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useAuthStore } from "../../../store/auth-store";
import { useSignIn } from "../../../hooks/auth/use-sign-in";
import { showError } from "../../../utils/toast";
import * as S from "./styles";
import { Page } from "../../../components/page";
import { BrandMark } from "../../../components/brand/brand-mark";

export function LoginScreen({ navigation }: any) {
  const setAuth = useAuthStore((state) => state.setAuth);
  const { signIn, isLoading } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await signIn({ email, password });
      setAuth(response);
    } catch {
      showError("Não foi possível fazer login");
    }
  }

  return (
    <Page scroll>
      <S.Container>
        <BrandMark center />

        <S.Title>Tudo para o seu catálogo pet em um só lugar</S.Title>
        <S.Subtitle>
          Organize produtos, preços, estoque em uma experiência bonita, moderna
          e prática.
        </S.Subtitle>

        <S.Form>
          <Input
            label="E-mail"
            placeholder="voce@email.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <Input
            label="Senha"
            placeholder="Sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </S.Form>

        <Button
          title={isLoading ? "Entrando..." : "Entrar"}
          onPress={handleLogin}
          disabled={isLoading}
        />

        <S.Link onPress={() => navigation.navigate("Register")}>
          Criar conta
        </S.Link>
      </S.Container>
    </Page>
  );
}
