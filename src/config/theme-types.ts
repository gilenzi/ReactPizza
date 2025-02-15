export interface Colors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  white: string;
  warning: string;
  light: string;
  dark: string;
}

export interface FontSizes {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Spacers {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Fonts {
  body: string;
  heading: string;
}

export const screenSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export type ScreenSizes = keyof typeof screenSizes;

export type Device = {
  [k in ScreenSizes]: string;
};

export interface ITheme {
  colors: Colors;
  fontSizes: FontSizes;
  spacers: Spacers;
  fonts: Fonts;
  device: Device;
}
