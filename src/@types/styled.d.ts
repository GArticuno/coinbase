import 'styled-components';

declare module 'styled-components' {
  export interface TextVariantProps {
    primary: string;
    secondary: string;
    tertiary: string;
    quartenary: string;
    success: string;
    error: string;
    warn: string;
    contrast: string;
    percent: string;
  }

  export interface TextFontSizeProps {
    xs: '0.5rem';
    s: '0.75rem';
    m: '1rem';
    l: '1.5rem';
    xl: '2rem';
    xxl: '2.5rem';
  }

  export interface TextFontWeightProps {
    light: 300;
    regular: 400;
    medium: 500;
    bold: 700;
  }

  export interface GradientProps {
    primary: {
      head: string;
      tail: string;
    };
    secondary: {
      head: string;
      tail: string;
    };
  }

  export interface CalendarProps {
    primary: string;
    secondary: string;
  }

  export interface BackgroundColorProps {
    primary: string;
    secondary: string;
    tertiary: string;
  }
  export interface ColorsProps {
    background: BackgroundColorProps;
    border: string;
    gradient: GradientProps;
    text: TextVariantProps;
    calendar: CalendarProps;
  }

  export interface DefaultTheme {
    colors: ColorsProps;

    font: {
      size: TextFontSizeProps;
      weight: TextFontWeightProps;
    };
  }
}
