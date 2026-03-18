import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSoft: string;
      surface: string;
      primary: string;
      primaryDark: string;
      lime: string;
      text: string;
      textMuted: string;
      border: string;
      danger: string;
      inputBg: string;
      shadow: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    radius: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      pill: number;
    };
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  }
}
