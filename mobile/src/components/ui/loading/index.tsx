import { MotiView } from "moti";
import { Container, Dot, DotRow, Label } from "./styles";

type Props = {
  label?: string;
};

export function Loading({ label = "Carregando..." }: Props) {
  return (
    <Container>
      <DotRow>
        {[0, 1, 2].map((item) => (
          <MotiView
            key={item}
            from={{ opacity: 0.3, translateY: 0 }}
            animate={{ opacity: 1, translateY: -4 }}
            transition={{
              type: "timing",
              duration: 500,
              loop: true,
              delay: item * 120,
            }}
          >
            <Dot />
          </MotiView>
        ))}
      </DotRow>

      <Label>{label}</Label>
    </Container>
  );
}
