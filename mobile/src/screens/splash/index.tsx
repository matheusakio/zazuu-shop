import { MotiView } from "moti";
import * as S from "./styles";
import { Page } from "../../components/page";

export function SplashScreen() {
  return (
    <Page>
      <S.Container>
        <MotiView
          from={{ opacity: 0, scale: 0.96, translateY: 8 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 500 }}
        >
          <S.BrandWrapper>
            <S.BrandRow>
              <S.BrandPrimary>za</S.BrandPrimary>
              <S.BrandAccent>zuu</S.BrandAccent>
              <S.BrandPrimary> shop</S.BrandPrimary>
            </S.BrandRow>

            <S.BrandLine />

            <S.BrandSubtitle>BEM-ESTAR PET</S.BrandSubtitle>
          </S.BrandWrapper>
        </MotiView>
      </S.Container>
    </Page>
  );
}
