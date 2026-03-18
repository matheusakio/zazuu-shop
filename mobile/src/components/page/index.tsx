import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ScreenBackground, ScrollPage, ViewPage } from "./page-container";
import { PageHeaderWithTitle } from "./page-header-with-title";
import { PageHeader } from "./page-header";

const Content = styled.View<{ hidePadding?: boolean }>`
  flex: 1;
  padding-horizontal: ${({ hidePadding }) => (hidePadding ? 0 : 20)}px;
`;

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  showHeader?: boolean;
  title?: string;
  hidePadding?: boolean;
  back?: boolean;
};

export function Page({
  children,
  scroll = false,
  showHeader = false,
  title,
  hidePadding = false,
  back = true,
}: Props) {
  const Container = scroll ? ScrollPage : ViewPage;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScreenBackground>
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
          <Container>
            <Content hidePadding={hidePadding}>
              {title ? (
                <PageHeaderWithTitle back={back} title={title} />
              ) : showHeader ? (
                <PageHeader />
              ) : null}

              {children}
            </Content>
          </Container>
        </SafeAreaView>
      </ScreenBackground>
    </KeyboardAvoidingView>
  );
}
