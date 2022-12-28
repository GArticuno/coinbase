import { BackgroundColorProps } from 'styled-components';

export type BoxLayoutProps = {
  display?: string;
  flex?: number;
  flexDirection?: string;
  alignItems?: string;
  alignSelf?: string;
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
  minHeight?: number;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
};

export type BoxProps = {
  children?: React.ReactNode | React.ReactNode[];
} & BoxLayoutProps;
