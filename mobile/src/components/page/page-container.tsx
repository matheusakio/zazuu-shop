import { PropsWithChildren } from "react";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const Root = styled.View`
  flex: 1;
`;

export function ViewPage({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function ScrollPage({ children }: PropsWithChildren) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

export function ScreenBackground({ children }: PropsWithChildren) {
  return (
    <Root>
      <LinearGradient
        colors={["#E4EEE8", "#F2F7F4", "#FFFDF6"]}
        locations={[0, 0.55, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      {children}
    </Root>
  );
}
