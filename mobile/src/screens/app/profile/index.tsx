import { LinearGradient } from "expo-linear-gradient";
import { Page } from "../../../components/page";
import { Button } from "../../../components/ui/button";
import { useAuthStore } from "../../../store/auth-store";
import * as S from "./styles";

export function ProfileScreen() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <Page back={false} title="Perfil">
      <S.Container>
        <S.UserCard>
          <S.SectionName>
            <S.Section>
              <S.Label>Nome</S.Label>
              <S.Value>{user?.username}</S.Value>
            </S.Section>
            <S.Avatar>
              <S.AvatarText>{user?.username?.[0] ?? "U"}</S.AvatarText>
            </S.Avatar>
          </S.SectionName>

          <S.Section>
            <S.Label>E-mail</S.Label>
            <S.Value>{user?.email}</S.Value>
          </S.Section>
        </S.UserCard>
      </S.Container>
      <Button title="Sair do app" onPress={logout} />
    </Page>
  );
}
