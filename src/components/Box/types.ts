import { BackgroundColorProps } from 'styled-components';

export type BoxLayoutProps = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  position?: string;
  gap?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  isGradientBackground?: boolean;
  background?: keyof BackgroundColorProps;
  hasBorder?: boolean;
  maxWidth?: number;
};

export type BoxProps = {
  children?: React.ReactNode | React.ReactNode[];
} & BoxLayoutProps;
