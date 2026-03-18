import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useSignUp } from "../../../hooks/auth/use-sign-up";
import { showError, showSuccess } from "../../../utils/toast";
import * as S from "./styles";
import { Page } from "../../../components/page";

export function RegisterScreen({ navigation }: any) {
  const { signUp, isLoading } = useSignUp();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      await signUp({ username, email, password });
      showSuccess("Conta criada com sucesso");
      navigation.goBack();
    } catch {
      showError("Não foi possível criar a conta");
    }
  }

  return (
    <Page scroll title="Criar conta" back>
      <S.Container>
        <S.Subtitle>
          Comece a gerenciar seus produtos com uma experiência simples e
          elegante.
        </S.Subtitle>

        <S.Form>
          <Input
            label="Nome de usuário"
            placeholder="Seu nome"
            value={username}
            onChangeText={setUsername}
          />
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
          title={isLoading ? "Criando..." : "Criar conta"}
          onPress={handleRegister}
          disabled={isLoading}
        />

        <S.Link onPress={() => navigation.goBack()}>Voltar para login</S.Link>
      </S.Container>
    </Page>
  );
}
